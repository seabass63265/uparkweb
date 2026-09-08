import TeamCard from './TeamCard'

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-white rounded-[40px] my-12 mx-4 md:mx-auto max-w-[1360px] px-8 md:px-16 py-24 md:py-32 shadow-[0_20px_40px_rgba(0,0,0,0.02)]"
    >
      <div className="content-wrap gs-reveal">
        <span className="t-mono mb-6 block text-brand">THE TEAM</span>
        <h2 className="t-h1 mb-24 max-w-3xl text-balance">
          Built by people who experienced the problem.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <TeamCard
            initials="SR"
            name="Sebastian Rocha"
            role="Co-Founder & CEO"
            bio={[
              'Sebastian began taking college courses through dual enrollment at Santa Monica College at age 16 before transferring to Loyola Marymount University, where he studied Computer Science with additional study in Statistics and Data Science.',
              'His background spans software development, product management, public-sector technology, entrepreneurship, and building technology around real-world problems.',
            ]}
          />
          <TeamCard
            initials="CTO"
            name="[CTO NAME]"
            role="Co-Founder & CTO"
            bioItalic
            bio={[
              "Bio placeholder focusing on software engineering, architecture, and the technical development of UPark's core platform and infrastructure.",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
