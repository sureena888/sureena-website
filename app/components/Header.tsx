import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-black p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Sureena Hukkoo</h1>
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-black md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li><Link href="#about" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white transition-colors">About</Link></li>
            <li><Link href="#projects" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white transition-colors">Projects</Link></li>
            <li><a href="https://www.linkedin.com/in/sureena-hukkoo-b20496144/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
            <li><Link href="#contact" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}