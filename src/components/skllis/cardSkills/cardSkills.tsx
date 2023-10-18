import Image from 'next/image'

interface cardSkillsProps {
  image: string
  name: string
  description: string
}

export function CardSkills({ image, name, description }: cardSkillsProps) {
  return (
    <div className="h-[17rem] max-w-[27.188rem] w-full bg-black-88 flex flex-col justify-center gap-[0.938rem] p-[1.563rem] rounded-[0.625rem] shadow-card-project">
      <Image
        src={image}
        alt="Tool logo"
        width={0}
        height={0}
        className="rounded-[0.625rem] h-[4.688rem] w-[5.563rem]"
      />
      <h4 className="text-2xl leading-normal font-semibold text-red">{name}</h4>
      <p className="text-base leading-[1.7rem] font-normal text-white-0">
        {description}
      </p>
    </div>
  )
}