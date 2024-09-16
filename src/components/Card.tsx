import Image from "next/image";

interface ReviewCardProps {
    reviewer: string;
    reviewerImage: string;
    position: string;
    review: string;
}
const ReviewCard: React.FC<ReviewCardProps> = ({ reviewer, reviewerImage, position, review }) => {
    return (
        <div className="bg-white border-2 rounded-lg p-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 rounded-full">
                    <Image
                        className="h-12 w-12 rounded-full"
                        src={reviewerImage || "https://randomuser.me/api/portraits/men/9.jpg"}
                        alt={""}
                    />
                </div>
                <div>
                    <div className="text-xl font-semibold">{reviewer}</div>
                    <div className="text-gray-500">{position}</div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-600">{review}</p>
            </div>
        </div>
    );
}

export default ReviewCard;