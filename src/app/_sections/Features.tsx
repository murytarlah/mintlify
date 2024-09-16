import Image from "next/image"
import RocketIcon from "@/assets/feature.svg"

export default function Features(){
    return (
        <section className="bg-[#4B5563] rounded-xl w-full xl:w-[1408px] mx-auto">

            <div className="w-full xl:w-[1024px] mx-auto py-32">
                <div className="flex flex-col justify-center items-center gap-6">
                    <p><Image className="inline-block" src={RocketIcon} alt="rocket ion signifying growth" /> Features</p>
                    <div className="flex flex-col items-center gap-3.5">
                        <h2 className="text-5xl">Documentation leveled up</h2>
                        <p className="text-lg text-[#4B5563]">Built for the modern business to engage users</p>
                    </div>
                </div>
                <div className="container mx-auto">
                </div>
            </div>
        </section>
    )
}