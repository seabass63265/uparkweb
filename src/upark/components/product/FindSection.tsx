/** FIND — browse available parking around the destination. */
export default function FindSection() {
  return (
    <section
      id="find"
      className="pt-32 pb-32 bg-white w-full border-t border-gray-100"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20 gs-reveal">
          <span className="t-mono text-brand mb-4 block">FIND</span>
          <h2 className="t-h1 mb-6 text-black">See what&rsquo;s available.</h2>
          <p className="t-body-m text-gray-500 max-w-xl mx-auto">
            Browse available parking around your destination instead of searching
            after you arrive.
          </p>
        </div>

        <div className="w-full h-[500px] md:h-[600px] bg-[#f5f6f8] rounded-[40px] shadow-2xl border border-gray-200 overflow-hidden relative mx-auto gs-reveal max-w-5xl">
          <div className="absolute top-[10%] left-[5%] w-[35%] h-[80%] bg-white rounded-[32px] shadow-sm flex flex-col justify-between p-8">
            <div className="w-1/2 h-4 bg-gray-100 rounded" />
            <div className="w-1/3 h-4 bg-gray-100 rounded" />
          </div>
          <div className="absolute top-[5%] right-[5%] w-[50%] h-[40%] bg-white rounded-[32px] shadow-sm flex items-center justify-center p-8">
            <div className="w-full h-full border-2 border-dashed border-gray-100 rounded-[20px]" />
          </div>
          <div className="absolute bottom-[5%] right-[10%] w-[40%] h-[40%] bg-white rounded-[32px] shadow-sm" />

          <div className="absolute top-[35%] right-[40%] text-center opacity-40 mix-blend-multiply pointer-events-none">
            <div className="font-black text-4xl text-gray-300 uppercase tracking-tighter">
              Campus
            </div>
          </div>

          <div className="absolute top-[20%] left-[30%] find-pin">
            <div className="w-16 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
              5 CR
            </div>
          </div>
          <div className="absolute top-[60%] left-[20%] find-pin">
            <div className="w-16 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold shadow-xl shadow-brand/30 border-2 border-white transform scale-110 cursor-pointer">
              4 CR
            </div>
            <div className="w-px h-12 bg-brand mx-auto mt-1 opacity-50" />
          </div>
          <div className="absolute bottom-[20%] right-[30%] find-pin">
            <div className="w-16 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
              8 CR
            </div>
          </div>
          <div className="absolute top-[15%] right-[20%] find-pin">
            <div className="w-16 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
              6 CR
            </div>
          </div>

          <div className="absolute bottom-[10%] left-[50%] w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
