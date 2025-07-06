import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type GiftCard = {
    title: string;
    description: string;
    action: string;
    image: string;
}

export const GiftCards = () => {
    const data: GiftCard[] = [
        {
            title: "Flexible Investment to grow you money",
            description: "Start small, think big,invest in major projects with pocket-friendly cash and watch your money do the hustle for you.",
            action: "Get Started",
            image: "https://ik.imagekit.io/rwgk2b4rf/2209_w019_n002_695b_p15_695-Photoroom.png?updatedAt=1750957014318"
            // image : "https://ik.imagekit.io/rwgk2b4rf/image-Photoroom.png?updatedAt=1746628635777"
        },
        {
            title: "Get up to 35% Returns",
            description: " No wahala, no grammar. Just simple investing—start with as low as ₦1,000 and watch your money grow, even if you're new to the game.",
            action: "Get Started",
            image: "https://ik.imagekit.io/rwgk2b4rf/top-view-statistics-presentation-with-pie-chart-Photoroom.png?updatedAt=1750958227215"
            // image : "https://ik.imagekit.io/rwgk2b4rf/image%20(1)-Photoroom.png?updatedAt=1746628469227"

        },
    ]

    return (
        <>
          <section className="flex flex-col justify-between items-center gap-10 p-5 lg:p-10">
            {data.map((content, index) => (
                <div key={index} 
                 className="bg-[#ebfdff] w-full rounded-4xl lg:p-20 lg:pb-0 lg:pr-0 pb-0 p-10 pr-0 flex lg:flex-row flex-col group cursor-pointer gap-[50px] lg:gap-[0px]"
                >
                   <div className='flex flex-col'>
                      <span className='text-[25px] lg:text-[40px] text-[#002444] mb-4 font-semibold'>{content.title}</span>
                      <span className=' text-[17px] lg:text-[20px] text-[#1B507E] mb-10'>{content.description}</span>
                      <Link href={"/signup"}>
                         <span className='text-[#7580EF] flex flex-row  gap-3 text-[18px] lg:text-[21px] font-semibold'>{content.action} <FaArrowRight /></span>
                      </Link>
                   </div>
                   <div>
                     <img 
                       src={content.image}
                       className= "w-full max-h-[500px] bg-transparent transform group-hover:scale-105 transition-transform duration-500 rounded-br-4xl"
                      />
                   </div>
                </div>
            ))}
          </section>
        </>
    )
}