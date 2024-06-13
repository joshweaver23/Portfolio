const ExperienceList = [
  {
    title: 'Senior Software Engineer',
    company: 'Vacasa',
    date: 'Jun 2022 - Jun 2024',
    technologies: [
      'TypeScript',
      'React',
      'NestJS',
      'Python',
      'Flask',
      'AWS',
      'Postgres',
    ],
    description: [
      '(May 2023 - Present) As a member of a small team dedicated to overhauling a legacy ticketing system, I have been responsible for designing and building new ticketing services. This has included designing and architecting many services including new APIs built with NestJS and deployed to Amazon ECS, lambda functions to handle scheduled jobs as well as pub/sub data transfer between many services, a new RDS Postgres data store, and a new TypeScript/React web app. Additional responsibilities have included creating and refining agile tickets, time estimating and resource delegation, mentoring other team members on TypeScript and React best practices, creating architectural decision records, and coordinating with many other teams to ensure that we are meeting important needs as well as maintaining legacy contracts.',
      '(June 2022 - May 2023) As a member of the reservations team, responsible for creating new backend API services to support rental reservations company wide. Additional responsibilities included architectural design of and work to migrate some existing services away from a legacy monolithic architecture to a new micro service oriented architecture. Core technologies for this role include Python, Flask, AWS EC2, AWS Lambda, Terraform, MySQL, as well as many other AWS technologies.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Second Front Systems',
    date: 'Sep 2020 - May 2022',
    technologies: ['TypeScript', 'React', 'Redux', 'GoLang', 'MySql', 'AWS'],
    description: [
      'Built a web app using Typescript-React-Redux-MaterialUI frontend with GoLang-MySql-EC2 backend.',
      'Work with Data Team to build complex company screening software using Python and AWS Lambda.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'ATLATL Software (Now Dopple)',
    date: 'Oct 2019 - Sep 2020',
    technologies: [
      'Node.js',
      'MySQL',
      'DynamoDB',
      'AWS Lambda',
      'Python',
      'AngularJS',
      'React',
    ],
    description: [
      'Responsible for building and maintaining RESTful APIs utilizing Node.js, MySQL, DynamoDB, and AWS Lambda. Also responsible for maintaining existing web assets built with Python, AngularJS, and React.',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'LendingTree (Bought SnapCap)',
    date: 'Sep 2017 - Oct 2019',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MySQL',
      'AWS Lambda',
      'AWS S3',
    ],
    description: [
      "Continued responsibilities from SnapCap, but with a focus on building new web applications for LendingTree's business loan division.",
      "Built integrations with LendingTree's existing services to provide a seamless experience for our users.",
    ],
  },
  {
    title: 'Front-End Developer',
    company: 'SnapCap',
    date: 'Sep 2016 - Sep 2017',
    technologies: [],
    description: [
      "Responsible for creating and maintaining all of SnapCap's front - end web assets.",
      'Creation of a new web application for evaluating and tracking the credit health of your business.',
      'Creating and updating pages for our legacy website.',
      'Building a new portal for management, business partners, and investors using the Aurelia (Javascript) framework.',
      'Maintaining and updating a legacy website built with the Symphony (php) framework.',
    ],
  },
]

function Experience() {
  return (
    <div className="grid grid-cols-4 gap-4" id="experience">
      <h2 className="col-span-1 text-left font-bold">What I&apos;ve Done</h2>
      <div className="col-span-3 space-y-4 text-left">
        {ExperienceList.map(
          ({ company, title, date, technologies, description }) => (
            <div key={company} className="col-span-4 space-y-2">
              <h3>
                <b>{title}</b> · {company} · {date}
              </h3>
              <p>
                <span className="uppercase">Principle Technologies:</span>{' '}
                {technologies.join(', ')}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {description.map((desc) => (
                  <p className="col-span-4 space-y-4 text-sm" key={desc}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default Experience
