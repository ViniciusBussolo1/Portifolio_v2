import Image from 'next/image'
import Link from 'next/link'

interface cardProjectsProps {
  image: string
  title: string
  description: string
  technologes: Array<string>
  site: string
}

export function CardProjects({
  image,
  title,
  description,
  technologes,
  site,
}: cardProjectsProps) {
  return (
    <Link
      href={site}
      target="_blanck"
      className="h-[28.188rem] w-[16.875rem] min-[375px]:max-w-[27.188rem] min-[375px]:w-full bg-black-88 hover:bg-black-75 flex flex-col justify-center gap-[0.938rem] p-[1.563rem] rounded-[0.625rem] shadow-card-project"
    >
      <Image
        src={image}
        alt="Image Project"
        width={0}
        height={0}
        className="rounded-[0.625rem] w-full"
      />
      <h4 className="text-xl min-[515px]:text-2xl leading-normal font-semibold text-red-500">
        {title}
      </h4>
      <p className="text-sm min-[515px]:text-base leading-[1.7rem] font-normal text-white-0">
        {description}
      </p>
      <div className="w-full flex flex-wrap items-center gap-[0.563rem]">
        {technologes.map((item, index) => {
          return (
            <div
              key={index}
              className="px-[0.375rem] py-1 rounded-[0.313rem] border border-white-0 text-xs min-[515px]:text-sm leading-normal text-white-0 font-normal"
            >
              {item}
            </div>
          )
        })}
      </div>
    </Link>
  )
}
