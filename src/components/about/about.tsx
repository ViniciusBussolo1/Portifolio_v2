import Image from 'next/image'
import AboutPicture from '../../../public/About_Picture.svg'
import { TitleSection } from '../titleSection/titleSection'

export function About() {
  return (
    <section
      id="sobre"
      className="w-full h-[55rem] bg-black-80 flex justify-center items-center px-4 min-[515px]:px-2"
    >
      <div className="flex flex-col justify-center items-center gap-[5.625rem]">
        <TitleSection title="Sobre Mim" />
        <div className="max-w-[58.188rem] w-full flex max-[800px]:flex-col items-center gap-[2.625rem]">
          <Image src={AboutPicture} alt="About Picture" />
          <div className="max-[800px]:max-w-[39.938rem] max-[800px]:w-full flex flex-col gap-[2.188rem]">
            <p className="text-sm min-[515px]:text-base leading-[1.7rem] font-normal text-white-0 text-justify">
              Olá, meu nome é Vinicius Bussolo, sou desenvolvedor Front-end,
              formado em Ciência da Computação. Tenho experiência em React.js,
              Next.js, JavaScript, TypeScript, Tailwindcss e consumo de APIs
              REST. Desenvolvo páginas e sistemas web responsivos, com foco em
              criar layout atrativos.
            </p>
            <div className="max-w-[20.188rem] w-full space-y-[0.625rem]">
              <div className="w-full flex items-center gap-5">
                <span className="max-w-[6.2rem] min-[515px]:max-w-[7.5rem] w-full text-sm min-[515px]:text-base leading-[1.7rem] font-semibold text-white-0">
                  Email:
                </span>
                <span className="text-sm min-[515px]:text-base leading-[1.7rem] font-normal text-white-0 flex-1">
                  vinicius.buss13@gmail.com
                </span>
              </div>
              <div className="w-full flex items-center gap-5">
                <span className="max-w-[6.25rem] w-full text-sm min-[515px]:text-base leading-[1.7rem] font-semibold text-white-0">
                  Localidade:
                </span>
                <span className="text-sm min-[515px]:text-base leading-[1.7rem] font-normal text-white-0 flex-1 ">
                  Orleans, SC
                </span>
              </div>
              <div className="w-full flex items-center gap-5">
                <span className="max-w-[6.25rem] w-full text-sm min-[515px]:text-base leading-[1.7rem] font-semibold text-white-0">
                  Idade:
                </span>
                <span className="text-sm min-[515px]:text-base leading-[1.7rem] font-normal text-white-0 flex-1">
                  23
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
