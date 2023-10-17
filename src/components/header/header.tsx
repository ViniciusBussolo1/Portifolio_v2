import Image from 'next/image'
import Logo from '../../../public/Logo.svg'

export function Header() {
  return (
    <header className="w-full bg-black-88 flex justify-center items-center py-[1.563rem] px-2">
      <div className="max-w-[70rem] w-full flex justify-between items-center">
        <Image src={Logo} alt="Logo" />
        <nav>
          <ul className="flex items-center gap-5">
            <li className="text-base leading-normal text-white-90">sobre</li>
            <li className="text-base leading-normal text-white-90">
              portifólio
            </li>
            <li className="text-base leading-normal text-white-90">
              habilidades
            </li>
            <li className="text-base leading-normal text-white-90">contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
