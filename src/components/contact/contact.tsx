import Link from 'next/link'
import { TitleSection } from '../titleSection/titleSection'

import { Github, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contato"
      className="w-full h-[45.688rem] bg-black-80 flex justify-center items-center"
    >
      <div className="max-w-[39.375rem] w-full flex flex-col justify-center items-center gap-[5.625rem]">
        <TitleSection title="Contato" />
        <h5 className="text-xl leading-normal font-normal text-center text-white-0">
          Atualmente estou à procura de emprego, por isso, se tiver uma oferta
          de emprego ou projeto, ou se precisar de mais informações, não hesite
          em contactar-me.
        </h5>
        <button className="px-[0.875rem] py-2 rounded-[0.188rem] bg-red-500 text-base leading-[1.7rem] font-semibold text-white-0 hover:bg-red-600 hover:text-white-90">
          Fale Comigo
        </button>
        <div className="flex items-center gap-5">
          <Link href={'https://github.com/ViniciusBussolo1'} target="_blanck">
            <Github color="white" />
          </Link>

          <Link
            href={'https://www.linkedin.com/in/vinicius-bussolo/'}
            target="_blanck"
          >
            <Linkedin color="white" />
          </Link>
        </div>
      </div>
    </section>
  )
}
