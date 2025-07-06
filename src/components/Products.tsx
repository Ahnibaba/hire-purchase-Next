import { FaArrowRight } from 'react-icons/fa'

export const Products = () => {
  type Data = {
    title: string,
    description: string,
    action: string,
    image: string
  }

  const data: Data[] = [
    {
      title: "Cars, Buses, and Vehicles",
      description: "Exploring Smart Investment Opportunities in the Automotive Sector",
      action: "Get Started",
      image: "https://ik.imagekit.io/rwgk2b4rf/099b5704-0ab1-43d9-8383-d117e49021f5-removebg-preview.png?updatedAt=1750954579548"
    },
    {
      title: "Billboards",
      description: "A Strategic Approach to Investing in Billboard Advertising Assets",
      action: "Get Started",
      image: "https://ik.imagekit.io/rwgk2b4rf/yellow-pink-billboards-against-blue-sky-Photoroom.png?updatedAt=1750958781422"
    }
  ]

  return (
    <>
      <section className='flex flex-col lg:flex-row justify-between gap-10 sm:p-10 p-5 items-stretch'>
        {data.map((content, index) => (
          <div 
            key={index}
            className={`
              ${index === 0 ? 'bg-gradient-to-b from-[#012D54] to-[#002444]' : 'bg-gradient-to-b from-[#EDE7FC] to-[#E6DDFD]'}
              rounded-4xl md:pb-0 md:py-15 md:px-15 lg:p-20 lg:pb-0 px-5 py-10 pb-0
              flex flex-col justify-between gap-3.5
            `}
          >
            <span className={`${index === 0 ? "text-white" : "text-[#002444]"} text-4xl font-semibold`}>
              {content.title}
            </span>
            <span className={`${index === 0 ? "text-[#D1E0E4]" : "text-[#1B507E]"} text-[20px] mt-5`}>
              {content.description}
            </span>
            <span className={`${index === 0 ? "text-[#00CEDE]" : "text-[#7580EF]"} flex flex-row font-semibold mt-10 text-2xl`}>
              {content.action}
              <FaArrowRight />
            </span>
            <img src={content.image} width={500} alt={content.title} />
          </div>
        ))}
      </section>
    </>
  )
}

