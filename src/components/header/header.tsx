'use client'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="w-full bg-black-88 flex justify-center items-center py-[1.563rem] px-4 min-[615px]:px-2">
      <div className="max-w-[70rem] w-full flex justify-between items-center">
        <Image src={Logo} alt="Logo" />
        <nav className="hidden min-[615px]:block">
          <ul className="flex items-center gap-5">
            <li className="text-base leading-normal text-white-90 cursor-pointer hover:text-white-80">
              <Link
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                sobre
              </Link>
            </li>
            <li className="text-base leading-normal text-white-90 cursor-pointer hover:text-white-80">
              <Link
                to="projetos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                projetos
              </Link>
            </li>
            <li className="text-base leading-normal text-white-90 cursor-pointer hover:text-white-80">
              <Link
                to="habilidades"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                habilidades
              </Link>
            </li>
            <li className="text-base leading-normal text-white-90 cursor-pointer hover:text-white-80">
              <Link
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                contato
              </Link>
            </li>
            <li>
              <button className="px-[0.875rem] py-2 bg-red-500 rounded-[0.188rem] text-base leading-[1.7rem] font-semibold text-white-0 hover:bg-red-600 hover:text-white-90">
                <a
                  href="http://localhost:3000/curriculo.pdf"
                  download={'curriculo.pdf'}
                >
                  Currículo
                </a>
              </button>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="text-red-500 focus:outline-none min-[615px]:hidden"
        >
          <svg
            className="h-9 w-9 text-red-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black-100 bg-opacity-80 z-50 min-[615px]:hidden ">
            <div className="flex flex-col items-center justify-center h-full gap-11">
              <button
                onClick={toggleMenu}
                className="text-red-500 focus:outline-none min-[615px]:hidden absolute top-[1.875rem] right-4"
              >
                <svg
                  className="h-9 w-9 text-red-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <ul className="space-y-4">
                <li className="text-3xl leading-normal text-white-90 cursor-pointer hover:text-white-80">
                  <Link
                    to="sobre"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    onClick={closeMenu}
                  >
                    sobre
                  </Link>
                </li>
                <li className="text-3xl leading-normal text-white-90 cursor-pointer hover:text-white-80">
                  <Link
                    to="projetos"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    onClick={closeMenu}
                  >
                    projetos
                  </Link>
                </li>
                <li className="text-3xl leading-normal text-white-90 cursor-pointer hover:text-white-80">
                  <Link
                    to="habilidades"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    onClick={closeMenu}
                  >
                    habilidades
                  </Link>
                </li>
                <li className="text-3xl leading-normal text-white-90 cursor-pointer hover:text-white-80">
                  <Link
                    to="contato"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    onClick={closeMenu}
                  >
                    contato
                  </Link>
                </li>
                <li>
                  <button className="px-[0.875rem] py-3 bg-red-500 rounded-[0.188rem] text-3xl leading-[1.7rem] font-semibold text-white-0 hover:bg-red-600 hover:text-white-90">
                    <a
                      href="http://localhost:3000/curriculo.pdf"
                      download={'curriculo.pdf'}
                    >
                      Currículo
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
