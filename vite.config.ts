import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { defineConfig, loadEnv, type Plugin } from 'vite'

type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse
  json: (body: unknown) => void
}

async function readJsonBody(req: IncomingMessage) {
  const chunks: Buffer[] = []
  for await (const chunk of req) chunks.push(chunk as Buffer)
  const raw = Buffer.concat(chunks).toString('utf8')
  if (!raw) return undefined
  try {
    return JSON.parse(raw)
  } catch {
    return undefined
  }
}

// `npm run dev` doesn't run Vercel Functions, so serve api/*.ts through Vite in dev.
// Production is unaffected: Vercel runs these files itself.
function localApi(): Plugin {
  return {
    name: 'local-api',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, server.config.root, '')
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) process.env[key] = value
      }

      server.middlewares.use(async (req, res, next) => {
        const name = /^\/api\/([\w-]+)$/.exec((req.url ?? '').split('?')[0])?.[1]
        if (!name) return next()

        const apiRes = res as ApiResponse
        apiRes.status = (code) => {
          res.statusCode = code
          return apiRes
        }
        apiRes.json = (body) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(body))
        }

        try {
          const mod = await server.ssrLoadModule(`/api/${name}.ts`)
          const request = req as IncomingMessage & { body?: unknown }
          request.body = await readJsonBody(req)
          await mod.default(request, apiRes)
        } catch (error) {
          server.config.logger.error(`[local-api] /api/${name} failed: ${String(error)}`)
          if (!res.headersSent) apiRes.status(500).json({ error: 'Internal error' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localApi()],
})
