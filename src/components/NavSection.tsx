"use client"
import React, { Ref } from "react";

export interface navs {
    "About": boolean;
    "Investments": boolean;
    "Explore": boolean;
}

type navSectionProps = {
    navs: navs;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    navSectionMenu?: Ref<HTMLDivElement>
}


const sidebarData = [
    {
        title: "Gift Cards",
        content: [
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Sell%20Gift%20Cards.svg?updatedAt=1746608979298",
                "title": "Sell Gift Cards",
                "description": "Exchange unused gift cards in Nigeria at amazing rates."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Travel%20Gift%20Cards.svg?updatedAt=1746608986861",
                "title": "Travel Gift Cards",
                "description": "Explore the world or create unique experiences at home."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Supermarket%20Gift%20Cards.svg?updatedAt=1746608980691",
                "title": "Supermarket Gift Cards",
                "description": "Buy anything from online supermarkets and stores."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Buy%20Gift%20Cards.svg?updatedAt=1746608972601",
                "title": "Buy Gift Cards",
                "description": "Buy from 14,000+ local and international gift cards."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Lifestyle%20Gift%20Cards.svg?updatedAt=1746608979312",
                "title": "Lifestyle Gift Cards",
                "description": "Purchase items from brands around the world."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Gaming%20Gift%20Cards.svg?updatedAt=1746608973210",
                "title": "Gaming Gift Cards",
                "description": "Access every possible game for your console."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Gift%20Card%20Rates.svg?updatedAt=1746608973187",
                "title": "Gift Card Rates",
                "description": "Discover the best rates for selling your gift card."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Music%20Gift%20Cards.svg?updatedAt=1746608979328",
                "title": "Music Gift Cards",
                "description": "Prepaid codes for any digital music platforms."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Streaming%20Gift%20Cards.svg?updatedAt=1746608979308",
                "title": "Streaming Gift Cards",
                "description": "Access subscriptions for your favorite streaming services."
            }
        ]

    },
    {
        title: "Products",
        content:
            [
                {
                    "image": "https://ik.imagekit.io/rwgk2b4rf/Just%20Gadgets.svg?updatedAt=1746608979280",
                    "title": "Cars, Buses and Vehicles",
                    "description": "Exploring Smart Investment Opportunities in the Automotive Sector."
                },
                {
                    "image": "https://ik.imagekit.io/rwgk2b4rf/Virtual%20Dollar%20Card.svg?updatedAt=1746608987836",
                    "title": "Billboards",
                    "description": "A Strategic Approach to Investing in Billboard Advertising Assets"
                },
                {
                  "image" : "https://ik.imagekit.io/rwgk2b4rf/Bill%20Payment.svg?updatedAt=1746608973230",
                  "title": "Bill Payment",
                  "description": "Organise and pay all your bills easily and seamlessly."
                },
                {
                  "image" : "https://ik.imagekit.io/rwgk2b4rf/Virtual%20Bank%20Account.svg?updatedAt=1746608987551",
                  "title": "Virtual Bank Account",
                  "description": "Open a Naira virtual bank account for easy topups."
                }


            ]
    },
    {
        title: "Explore",
        content: [
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Blog.svg?updatedAt=1746608972816",
                "title": "Become A Partner",
                "description": "Get the latest news, articles, and updates from Cardtonic."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Become%20A%20Partner.svg?updatedAt=1746608972863",
                "title": "Get In Touch",
                "description": "Launch a gifting program for your customers."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Become%20A%20Partner.svg?updatedAt=1746608972863",
                "title": "Upskill",
                "description": "MacBooks giveaway contest for tech enthusiasts."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/_CTGivesBack.svg?updatedAt=1746608972609",
                "title": "Blog",
                "description": "Learn about our community give-back initiatives."
            },
            {
                "image": "https://ik.imagekit.io/rwgk2b4rf/Get%20In%20Touch.svg?updatedAt=1746608973149",
                "title": "Opportunities",
                "description": "Reach out to us or follow us on social media."
            }
        ]

    },
]

export const NavSection = ({ navs, show, setShow, navSectionMenu }: navSectionProps) => {
    const activeIndex = Object.keys(navs).findIndex(key => navs[key as keyof typeof navs] === true)
    const isActive = activeIndex !== -1    // To check if any nav is active

    const handleMouseEnter = () => {
        setShow(true)
    }

    const handleMouseLeave = () => {
        setShow(false)
    }


    return (
        <section
          className={`absolute left-40 top-23 bg-[#FFFFFF] border-[2px] border-solid border-[#F8F8F9] p-[24px]
          items-center justify-center z-[10] rounded-3xl gap-4 cursor-pointer ${show ? "lg:flex": "lg-hidden"}
          ${activeIndex == 1 ? "left-100" : activeIndex == 2 ? "left-120" : "left-40"} hidden`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}

        > 
          <div className={`grid ${activeIndex == 1 ? "grid-cols-2" : activeIndex == 2 ? "grid-cols-2" : "grid-cols-3"} gap-4
          ${activeIndex == -1 && "hidden"}`}
          ref={navSectionMenu}
          >
            {isActive && activeIndex !== -1 && sidebarData[activeIndex].content.map((item, index) => (
              <div key={index} className="hover:bg-[#F8F8F9] py-1 px-2 rounded-[10px]">
                 <div className="flex flex-row max-w-[300px] items-center justify-between gap-[20px] py-[20px]">
                   <img src={item.image} alt="" />
                   <div className="flex flex-col">
                      <span className="text-[#002444] font-semibold text-[15px]">
                         {item.title}
                      </span>
                      <span className="text-[#1B507E] text-[15px] font-light">
                        {item.description}
                      </span>
                   </div>
                 </div>
              </div>
            ))

            }
          </div>  
        </section>
    )
}