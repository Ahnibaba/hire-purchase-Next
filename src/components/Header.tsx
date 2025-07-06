"use client"
import { useEffect, useState } from "react"
import { navs, NavSection } from "./NavSection"
import { RemoveScrollBar } from "react-remove-scroll-bar"
import { Sidebar } from "./Sidebar"
import Link from "next/link"


export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [navs, setNavs] = useState<navs>({
    "About": false,
    "Investments": false,
    "Explore": false
  })

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    console.log(navs);
    
  }, [navs])

  const toggleNavbar = (e:  React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setShow(true)
    const target = e.target as HTMLSpanElement
    setNavs({
      "About": "About" === target.innerText,
      "Investments": "Investments" === target.innerText,
      "Explore": "Explore" === target.innerText
    })
  }

  return (
    <>
      {isSidebarOpen && <RemoveScrollBar />}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <section className="header-section reveal-nav">
        <div>
           <img
             src="/images/hire-purchase-logo.png"
             className="max-w-[60%]"
            /> 
        </div>
        <div className="lg:flex flex-row justify-between items-center gap-7 hidden">
           <Link href="/about">
             <span className="text-[#002444] cursor-pointer" onMouseEnter={(e) => toggleNavbar(e)}>
                About
             </span>
           </Link>
           <Link href="/about">
             <span className="text-[#002444] cursor-pointer" onMouseEnter={(e) => toggleNavbar(e)}>
                Investments
             </span>
           </Link>
           <Link href="/about">
             <span className="text-[#002444] cursor-pointer" onMouseEnter={(e) => toggleNavbar(e)}>
                Explore
             </span>
           </Link>
        </div>
        {
            !isSidebarOpen ? (
              <img 
                onClick={() => toggleSidebar()}
                className=" flex lg:hidden cursor-pointer"
                src="https://ik.imagekit.io/rwgk2b4rf/svgexport-2.svg?updatedAt=1746608981115"
              />
            ) : (
              <img 
                onClick={() => toggleSidebar()}
                className=" flex lg:hidden cursor-pointer"
                src="https://ik.imagekit.io/rwgk2b4rf/svgexport-2.svg?updatedAt=1746734919350"
              />
            )
        }

        <div className="lg:flex flex-row items-center justify-between gap-5 hidden">
          <img
            src="https://ik.imagekit.io/rwgk2b4rf/svgexport-3.svg?updatedAt=1746608981980"
          />
          <Link href="/signup">
              <button className='hover:bg-[#7580EF] bg-[#002444] text-white py-3 px-7 rounded-3xl font-bold cursor-pointer'>Get Started</button>
          </Link>
        </div>
      </section>

      <NavSection navs={navs} show={show} setShow={setShow} />
    </>
  )
}