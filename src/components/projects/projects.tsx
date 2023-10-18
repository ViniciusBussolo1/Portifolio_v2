import { TitleSection } from '../titleSection/titleSection'
import { CardProjects } from './cardProjects/cardProjects'

import { ProjectItems } from '@/data/projectsItems'

export function Projects() {
  return (
    <section
      id="projetos"
      className="w-full h-[84.938rem] bg-black-80 flex justify-center items-center px-2"
    >
      <div className="h-[69.938rem] w-full flex flex-col justify-center items-center gap-[5.625rem]">
        <TitleSection title="Projetos" />
        <div className="grid grid-cols-2 gap-[3.125rem]">
          {ProjectItems.map((item, index) => {
            return (
              <CardProjects
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                technologes={item.technologies}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
