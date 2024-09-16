import Button from "@/components/Button";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import DocsImage from "@/assets/docs-image.png";

import Whop from "@/assets/whop.svg";
import ElevensLab from "@/assets/elevenlabs.svg";
import Finch from "@/assets/finch.svg";
import Stedi from "@/assets/stedi.svg";
import FlatFile from "@/assets/flatfile.svg";
import MindsDb from "@/assets/mindsdb.svg";
import Resend from "@/assets/resend.svg";
import SmartCar from "@/assets/smartcar.svg";
import Teleport from "@/assets/teleport.svg";
import Goody from "@/assets/goody.svg";


export default function HeroContent() {

    const customers = [Teleport, Finch, Stedi, FlatFile, ElevensLab, MindsDb, Resend, Goody, Whop, SmartCar];
    return (
        <section className="p-5 md:p-0 w-full lg:w-full mx-auto bg-custom-gradient relative after:absolute after:hidden md:after:block after:w-4/5  xl:after:w-[1152px] after:h-full after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:border-x-2 after:border-lightArmyGreen after:z-0    before:hidden md:before:block  before:absolute before:w-[70%] xl:before:w-[1024px] before:h-full before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:border-x-2 before:border-lightArmyGreen before:-z-0 ">
            <Header />
            <div className="flex flex-col gap-4 items-center justify-center py-16 md:w-4/5 lg:w-[1024px] mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full">
                    <span className="w-full relative after:absolute after:border-b-2 after:border-[rgba(40,97,103,0.07)] after:left-0 after:bottom-2 after:w-full after:h-1 block">The documentation</span>
                    <span className="w-full relative after:absolute after:border-b-2 after:border-[rgba(40,97,103,0.07)] after:left-0 after:bottom-2 after:w-full after:h-1 block">you want, effortlessly</span>
                </h1>
                <p className="text-md md:text-lg text-center md:w-4/5 lg:w-2/3">
                Meet the modern standard for public facing documentation. Beautiful out of
                the box, easy to maintain, and optimized for user engagement.
                </p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-10 justify-center lg:w-[1024px] mx-auto">
                <Button href="/get-started" classes="bg-[#286167] text-white relative px-6" rounded="full">Get Started <FontAwesomeIcon style={{color: '#fff'}} icon={faChevronRight} /></Button>
                <Button href="/get-started" rounded="full" classes="text-[#286167]">Documentation <FontAwesomeIcon style={{color: "#286167"}} icon={faChevronRight} /></Button>
            </div>
            <div className="my-6 relative md:after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-b-2 after:border-lightArmyGreen after:border-t-2 px-5 md:px-10">
                <div className="w-full h-auto bg-lightArmyGreen p-2 xl:w-[1152px] mx-auto">
                    <Image className="rounded-3xl" src={DocsImage} alt="documentation page image" />
                </div>
            </div>

            <div className="flex flex-col gap-6 py-8 w-full md:w-2/3 mx-auto xl:w-[1024px]">
                <p className="text-[rgba(15,79,87,0.7)] flex flex-col lg:flex-row items-center justify-center">Powering developer experiences from fast growing startups to enterprises. <Button href="/showcases" rounded="full" classes="text-[#286167]">See showcases <FontAwesomeIcon style={{color: "#286167"}} icon={faChevronRight} /></Button> </p>
                <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-[repeat(5,minmax(100px,1fr))] md:grid-rows-[repeat(2,minmax(100px,1fr))] items-center justify-items-center lg:p-10">
                    {customers.map((customer, index) => (
                        <div key={index} className="w-4/5 xl:w-full">
                            <Image src={customer} alt="customer logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}