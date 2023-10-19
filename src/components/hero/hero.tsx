'use client'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Arrow from '../../../public/Hero_Arrow.svg'
import Code from '../../../public/Code.svg'

export function Hero() {
  return (
    <section className="w-full h-[57.75rem] bg-black-88 flex justify-center items-center px-2 ">
      <div className="max-w-[58.125rem] w-full h-[39rem] flex justify-center relative">
        <div className="flex max-[800px]:flex-col items-center gap-[3.125rem] ">
          <Image
            src={Code}
            alt="Icon Code"
            className="text-red-500 max-[415px]:w-[7.188rem]"
          />
          <div className="space-y-3">
            <h1 className="text-4xl min-[415px]:text-5xl min-[515px]:text-6xl min-[615px]:text-7xl leading-[4.95rem] font-extrabold text-white-0">
              Vinicius <span className="text-red-500">Bussolo</span>
            </h1>
            <h4 className="min-[515px]:text-xl min-[615px]:text-2xl leading-normal font-light text-white-90">
              Front-end Developer
            </h4>
          </div>
        </div>
        <Link
          to="sobre"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="absolute bottom-0 cursor-pointer"
        >
          {' '}
          <Image src={Arrow} alt="Arrow" />
        </Link>
      </div>
    </section>
  )
}
