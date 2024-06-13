function Navigation() {
  return (
    <nav className="flex justify-end space-x-8 fixed top-0 left-0 right-0 py-6 px-12 bg-white">
      <a href="#about" className="hover:mt-1 lowercase">
        About
      </a>
      <a href="#experience" className="hover:mt-1 lowercase">
        Experience
      </a>
      <a href="#recommendations" className="hover:mt-1 lowercase">
        Recommendations
      </a>
      <a href="#contact" className="hover:mt-1 lowercase">
        Contact
      </a>
    </nav>
  )
}

export default Navigation
