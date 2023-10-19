import { TitleSection } from '../titleSection/titleSection'
import { CardProjects } from './cardProjects/cardProjects'

import { ProjectItems } from '@/data/projectsItems'

export function Projects() {
  return (
    <section
      id="projetos"
      className="w-full bg-black-80 flex justify-center items-center px-4 pt-[7.5rem]"
    >
      <div className="w-full flex flex-col justify-center items-center gap-[5.625rem] ">
        <TitleSection title="Projetos" />
        <div className="grid grid-rows-1 min-[800px]:grid-cols-2 gap-[3.125rem] ">
          {ProjectItems.map((item, index) => {
            return (
              <CardProjects
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                technologes={item.technologies}
                site={item.site}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
