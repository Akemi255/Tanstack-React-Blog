import { useNavigate } from "@tanstack/react-router";

interface NewsCardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    category: string
}

export default function NewsCard({
    title,
    description,
    imageUrl,
    date,
    id,
    category,
}: NewsCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className="group border rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden cursor-pointer"
            onClick={() =>
                navigate({
                    to: `/posts/${id}`,
                })
            }
        >
            {/* Image with hover effect */}
            <div className="overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-4 transition-colors duration-300 group-hover:bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500">
                    {title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
                <p className="text-xs text-gray-500">
                    {new Date(date).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
