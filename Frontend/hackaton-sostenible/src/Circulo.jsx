export default function Circulo({
  size,
  color,
  pos
}) {

  const sizeClasses = { 
    xs: 'w-[2rem] md:w-[3rem] lg:w-[5rem] aspect-square -z-99',
    small: 'w-[4rem] md:w-[6rem] lg:w-[8rem] aspect-square -z-99 ',
    medium: 'w-[6rem] md:w-[8rem] lg:w-[12rem] aspect-square -z-50',
    large: 'w-[8rem] md:w-[12rem] lg:w-[18rem] aspect-square -z-99',
    xl: 'w-[10rem] md:w-[15rem] lg:w-[25rem] aspect-square -z-99',
    xsCO: 'md:w-[3rem] lg:w-[5rem] aspect-square -z-99',
    smallCO: 'md:w-[6rem] lg:w-[8rem] aspect-square -z-99',
    mediumCO: 'md:w-[8rem] lg:w-[12rem] aspect-square -z-99',
    largeCO: 'md:w-[12rem] lg:w-[18rem] aspect-square -z-99',
    xlCO: 'md:w-[15rem] lg:w-[25rem] aspect-square -z-99',
  };
  const colorClasses = {
    naranja: 'bg-naranja-next',
    azul: 'bg-azul-next',
  };
  return (
          <div className={`absolute ${pos} rounded-full ${colorClasses[color]} ${sizeClasses[size]} transition-all transition-discrete duration-400 ease-in-out `}/>
  );
}