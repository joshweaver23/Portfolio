const LinkItems = [
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/joshweaver23',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/joshweaver23',
  },
]

function Links() {
  return (
    <footer
      className="flex flex-row flex-wrap items-center justify-center w-full py-6 text-center mt-12 gap-y-6 gap-x-12 md:justify-between"
      id="links"
    >
      <p className="block">© {new Date().getFullYear()} Josh Weaver</p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {LinkItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.url}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 lowercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Links
