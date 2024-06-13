const CoworkerRecommendations = [
  {
    name: 'Becky Kluth',
    title: 'Senior Software Engineer',
    company: 'Vacasa',
    recommendation: [
      `Josh is a 10x ninja rockstar engineer treasure genius that everyone should have the luck to work with. He immediately assumed I knew and could do stuff even though I am a woman, and could tell that an image of an IUD in a blog about react hooks was not for fishing. Josh is also just a very chill, reasonable, fun person who knows all kinds of stuff and is always excited to help and teach and is never offended when I say rude things about javascript. I would work together again in a heartbeat, I hope his startup takes off and he gets to make beer or whatever other fun stuff forever, he deserves that in life. Also his new puppy is really great and he will show him to you during meetings, an experience worth $millions right there.`,
    ],
  },
  {
    name: 'Jason Abbott',
    title: 'Engineering Manager',
    company: 'Vacasa',
    recommendation: [
      'Josh is a strong engineer across the full stack, diving one day into Terraform weeds and the next into React state issues before meeting with the designer to fine tune some CSS.',
      'He not only did the work, day in, day out, but he was an excellent representative with stakeholders and other engineering teams, graciously describing hurdles and coordinating solutions.',
      'I would love to work with Josh again.',
    ],
  },
  {
    name: 'Eric Carr',
    title: 'Director of Technology',
    company: 'Vacasa',
    recommendation: [
      'I just wanted to say thank you for being such good engineer, and a professional with the whole layoffs situation. It is a true testament to your efforts how clean the repositories are and how smooth the transition is.',
    ],
  },
]

function Recommendations() {
  return (
    <div className="grid grid-cols-4 gap-4" id="recommendations">
      <h1 className="col-span-1 text-left font-bold">From Former Coworkers</h1>
      <div className="col-span-3 text-left space-y-4">
        {CoworkerRecommendations.map(
          ({ name, title, company, recommendation }) => (
            <div key={name} className="col-span-4 space-y-2">
              <div className="grid grid-cols-4 gap-4">
                {recommendation.map((rec) => (
                  <p className="col-span-4 space-y-4 text-sm" key={rec}>
                    {rec}
                  </p>
                ))}
              </div>
              <h3>
                <b>{name}</b> · {title} · {company}
              </h3>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default Recommendations
