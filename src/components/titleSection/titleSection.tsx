interface tilteSectionProps {
  title: string
}

export function TitleSection({ title }: tilteSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-5xl leading-normal font-extrabold text-white-0">
        {title}
      </h2>
      <div className="w-[3.75rem] h-1 stroke-[0.25rem] bg-red rounded"></div>
    </div>
  )
}
