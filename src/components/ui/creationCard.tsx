type CreationCardProps = {
  desktop: string
  mobile: string
  title: string
}

const CreationCard = ({ desktop, mobile, title }: CreationCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <article
      className="relative h-32 lg:h-96 w-full overflow-hidden flex items-end p-6 group cursor-pointer"
      tabIndex={0}
      aria-labelledby={`creation-${title.replace(/\s+/g, "-").toLowerCase()}`}
      onKeyDown={handleKeyDown}
    >
      <picture className="absolute inset-0 overflow-hidden">
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img
          src={mobile}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80" />
      <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <h3
        id={`creation-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="relative text-white uppercase text-2xl font-light leading-none max-w-[9ch] transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
      >
        {title}
      </h3>
    </article>
  )
}

export default CreationCard
