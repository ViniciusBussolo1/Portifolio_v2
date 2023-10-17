import Image from 'next/image'
import Arrow from '../../../public/Hero_Arrow.svg'

export function Hero() {
  return (
    <section className="w-full h-[57.75rem] bg-black-88 flex justify-center items-center px-2 ">
      <div className="max-w-[58.125rem] w-full h-[39rem] flex justify-center relative">
        <div className="flex items-center gap-[3.125rem] ">
          <div className="w-[150px] h-[150px] bg-white-80 rounded-[50%]"></div>
          <div className="space-y-3">
            <h1 className="text-7xl leading-[4.95rem] font-extrabold text-white-0">
              Vinicius <span className="text-red">Bussolo</span>
            </h1>
            <h4 className="text-2xl leading-normal font-light text-white-90">
              Front-end Developer
            </h4>
          </div>
        </div>
        <Image src={Arrow} alt="Arrow" className="absolute bottom-0" />
      </div>
    </section>
  )
}
