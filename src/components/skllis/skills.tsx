import { TitleSection } from '../titleSection/titleSection'
import { SkillsItems } from '@/data/skillsItems'
import { CardSkills } from './cardSkills/cardSkills'

export function Skills() {
  return (
    <section
      id="habilidades"
      className="w-full bg-black-80 flex justify-center items-center px-5 pt-[9.375rem]"
    >
      <div className=" w-full flex flex-col justify-center items-center gap-[5.625rem]">
        <TitleSection title="Habilidades" />
        <div className="grid grid-rows-1 min-[800px]:grid-cols-2 gap-[3.125rem]">
          {SkillsItems.map((item, index) => {
            return (
              <CardSkills
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
