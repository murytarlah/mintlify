import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
    return (
        <section className="bg-white w-full">
            <div className="w-full xl:w-[1024px] mx-auto py-32">
                <div className="flex flex-col justify-center items-center gap-6">
                    <p><FontAwesomeIcon icon={faHeart} /> Wall of love</p>
                    <div className="flex flex-col items-center gap-3.5">
                        <h2 className="text-5xl">Built to impress</h2>
                        <p className="text-lg text-[#4B5563]">Why leading companies build with Mintlify</p>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <p className="text-lg mb-5">
                                    {"I had a great experience with this company. They were very professional and did a great job."}
                                </p>
                                <p className="font-bold">John Doe</p>
                                <p className="text-gray-400">CEO of Company</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <p className="text-lg mb-5">
                                    {"I had a great experience with this company. They were very professional and did a great job."}
                                </p>
                                <p className="font-bold">John Doe</p>
                                <p className="text-gray-400">CEO of Company</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <p className="text-lg mb-5">
                                    {"I had a great experience with this company. They were very professional and did a great job."}
                                </p>
                                <p className="font-bold">John Doe</p>
                                <p className="text-gray-400">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}