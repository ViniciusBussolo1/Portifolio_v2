import { TitleSection } from '../titleSection/titleSection'

import { Mail, Github, Phone, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section className="w-full h-[45.688rem] bg-black-80 flex justify-center items-center">
      <div className="max-w-[39.375rem] w-full flex flex-col justify-center items-center gap-[5.625rem]">
        <TitleSection title="Contact" />
        <h5 className="text-xl leading-normal font-normal text-center text-white-0">
          Atualmente estou à procura de emprego, por isso, se tiver uma oferta
          de emprego ou projeto, ou se precisar de mais informações, não hesite
          em contactar-me.
        </h5>
        <button className="px-[0.875rem] py-2 rounded-[0.188rem] bg-red text-base leading-[1.7rem] font-semibold text-white-0">
          Fale Comigo
        </button>
        <div className="flex items-center gap-5">
          <Mail color="white" />
          <Phone color="white" />
          <Github color="white" />
          <Linkedin color="white" />
        </div>
      </div>
    </section>
  )
}
