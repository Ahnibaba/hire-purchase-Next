import { Footer } from "@/components/Footer";
import { GetTheApp } from "@/components/GetTheApp";
import { GiftCards } from "@/components/GiftCards";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { TrustedBy } from "@/components/TrustedBy";
//import { Testimonials } from "@/components/Testimonials";
import { Video } from "@/components/Video";
import { VirtualDollarCard } from "@/components/VirtualDollarCard";

export default function RootPage() {
  return (
    <>
      <Header />
      <Hero />
      <Video />
      {/* <section className='flex pl-[40px] items-center pt-[100px] sm:pt-[150px] pb-[20px]'>
      <span className="text-[#d1e0e4] text-[30px] sm:text-[64px] font-semibold">Gift Cards</span>
     </section> */}
      <GiftCards />
      <section className='flex pl-[40px] items-center pt-[100px] sm:pt-[150px] pb-[20px]'>
        <span className="text-[#d1e0e4] text-[30px] sm:text-[64px] font-semibold">Products</span>
      </section>
      {/* <VirtualDollarCard /> */}
      <Products />
      {/* <section className='flex pl-[40px] items-center pt-[100px] sm:pt-[150px] pb-[20px] max-w-[10px]'>
      <span className="text-[#d1e0e4] text-[30px] sm:text-[64px] font-semibold">Testimonials & News</span>
     </section> */}
      {/* <Testimonials /> */}
      <TrustedBy />
      <GetTheApp />
      <Footer />

    </>
  )
}