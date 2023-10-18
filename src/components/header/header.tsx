'use client'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Logo from '../../../public/Logo.svg'

export function Header() {
  return (
    <header className="w-full bg-black-88 flex justify-center items-center py-[1.563rem] px-2">
      <div className="max-w-[70rem] w-full flex justify-between items-center">
        <Image src={Logo} alt="Logo" />
        <nav>
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
      </div>
    </header>
  )
}
