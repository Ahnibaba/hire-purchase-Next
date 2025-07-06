"use client"

import { useState } from "react"

interface footer {
    title: string;
    content: string[]
}


const footerData: footer[] = [
    {
        title: "Features",
        content: [
            "Buy Gift Cards",
            "Sell Gift Cards"
        ]
    },
    {
        title: "Products",
        content: [
            "Airtime",
            "Data"
        ]
    },
    {
        title: "Available Gift Cards",
        content: [
            "Travel Gift Cards",
            "Lifestyle Gift Cards"
        ]
    },
    {
        title: "Resources",
        content: [
            "Ghanaians",
            "Blog",
            "Rewards",
            "Gift Card Rates",
            "Developer API"
        ]
    },
    {
        title: "Company",
        content: [
            "Partners",
            "#CTGivesBack",
            "Upskill",
            "Privacy Policy",
            "Terms of Use"
        ]
    },
    {
        title: "Connect",
        content: [
            "Get In Touch",
            "support@cardtonic.com",
            "+234 (0) 1 343 0626",
            "+234 (0) 706 050 2770"
        ]
    }
]

export const Footer = () => {
    const [accordionOpen, setAccordionOpen] = useState<{ [key: number]: boolean }>(
        {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false
        }
    )

    const toggleAccordion = (index: number) => {
        setAccordionOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            <section className=' hidden lg:flex flex-row  w-full px-15 items-start gap-[35px] py-20'>
                {footerData.map((content, i) => (
                    <div className='flex flex-col justify-between gap-7 w-full' key={i}>
                        <span className='text-[#1B507E] font-semibold'>{content.title}</span>
                        {content.content.map((item, index) => (
                            <span className="text-[16px] text-[#1B507E]" key={index}>{item}</span>
                        ))}
                    </div>
                ))}
            </section>

            <section className='lg:hidden flex flex-col w-full justify-between items-center bg-white'>
                {
                    footerData.map((content, index) => (
                        <div key={index} className='justify-between items-center  min-w-[300px] py-[50px]'>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className='flex justify-between w-full cursor-pointer '>
                                <span className='text-[#1B507E] font-semibold'>{content.title}</span>
                                {accordionOpen[index] ? <span className='text-3xl text-[#1B507E]'>-</span>
                                    : <span className='text-3xl text-[#1B507E]'>+</span>}
                            </button>
                            <div className={`grid overflow-hidden transition-all duration-200 ease-in-out text-slate-600 text-sm
                              ${accordionOpen[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className='overflow-hidden flex flex-col justify-between gap-[30px] mt-10'>
                                    {content.content.map((item, index) => (
                                        <span className="text-[#1B507E]" key={index}>{item}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))
                }

            </section>
            <section className='flex  flex-col lg:flex-row w-full px-30 text-[#1B507E]  items-center bg-[#F8F8F9] py-[50px]  gap-[10px]'>
                <div className='w-full text-center'>
                    &copy; Hire Purchase {new Date().getFullYear()}
                </div>
                <div className='lg:flex flex-row w-full gap-[40px] hidden '>
                    <span>X</span>
                    <span>Facebook</span>
                    <span>Whatsapp</span>
                    <span>Instagram</span>
                    <span>Threads</span>
                    <span>TikTok</span>
                    <span>LinkedIn</span>
                    <span>Telegram</span>

                </div>
            </section>
        </>
    )
}