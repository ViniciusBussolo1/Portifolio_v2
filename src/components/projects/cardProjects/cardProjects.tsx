import Image from 'next/image'

interface cardProjectsProps {
  image: string
  title: string
  description: string
  technologes: Array<string>
}

export function CardProjects({
  image,
  title,
  description,
  technologes,
}: cardProjectsProps) {
  return (
    <div className="h-[28.188rem] max-w-[27.188rem] w-full bg-black-88 flex flex-col justify-center gap-[0.938rem] p-[1.563rem] rounded-[0.625rem] shadow-card-project">
      <Image
        src={image}
        alt="Item"
        width={0}
        height={0}
        className="rounded-[0.625rem] w-full"
      />
      <h4 className="text-2xl leading-normal font-semibold text-red">
        {title}
      </h4>
      <p className="text-base leading-[1.7rem] font-normal text-white-0">
        {description}
      </p>
      <div className="flex items-center gap-[0.563rem]">
        {technologes.map((item, index) => {
          return (
            <div
              key={index}
              className="px-[0.375rem] py-1 rounded-[0.313rem] border border-white-0 text-sm leading-normal text-white-0 font-normal"
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}
