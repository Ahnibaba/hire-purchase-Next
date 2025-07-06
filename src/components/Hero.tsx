import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export const Hero = () => {
    return (
      <section className="flex flex-col items-center py-[30px] gap-10 pt-[140px]">
        <div className=" flex flex-row gap-2 items-center bg-[#FFFFFF] border-[#F8F8F9] border-[1.9px] border-solid p-2 pt-0 pb-0 pr-0 rounded-3xl text-[#1B507E] reveal-try-section">
          <div className="whitespace-nowrap text-[12px] md:text-[20px]">
            Enjoy referral bonus while investing with as low as 1000₦
          </div>
          <Link href="/signup" className="bg-[#7580EF] text-white p-3 rounded-full cursor-pointer">
            <FaArrowRight />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 md:mt-5">
           <span className="text-center font-semibold px-3 md:leading-20 antialiased reveal-hero-section">
             <span className="text-[#002444] text-[30px] md:text-[64px]">
                 <span className=" p-2 text-white bg-[#002444] rounded-md whitespace-nowrap">Grow wealth</span>
                 sustainably with the &nbsp;
             </span>
             <span className="text-[#7580EF] text-[35px] md:text-[64px]">power of interconnectivity</span>
           </span> 
           <span className=' text-center max-w-[500px] text-[20px] text-[#002444] reveal-next-hero-section'>
             Hire purchase is a platform to power crowdsourced venture individual and collective  investment.
           </span>
        </div>

        <div className="items-center min-w-[350px] md:min-w-[400px]">
           <Link
             href="/signup"
             className="transition-colors duration-500 flex justify-center items-center text-center
             reveal-get-started-section px-[50px] py-[30px] md:py-[40px] w-[100%] hover:bg-[#7580EF] bg-[#002444]
             rounded-full text-white cursor-pointer  text-xl md:text-2xl"
           >
              <span className='hidden md:flex'>Get Started</span>
              <span className='md:hidden flex'> <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-7%20(1).svg' />&nbsp; Web Sign Up</span>
           </Link>
           <button
             className="transition-colors duration-500 sm:hidden mt-3 flex justify-center
             items-center text-center reveal-get-started-section px-[50px] py-[30px] md:py-[40px] w-[100%] hover:bg-[#7580EF] bg-[#0BC7E0]
             rounded-full text-black cursor-pointer  text-xl mdtext-2xl"
           >
              <span className='hidden md:flex'>Get Started</span>
              <span className='md:hidden flex'>
                 <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-10.svg?updatedAt=1746608983548' />
                 <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-11.svg?updatedAt=1746608983842' />&nbsp;
                 Available Soon on iOS & Android
              </span>
           </button>
        </div>
      </section>
    )
}