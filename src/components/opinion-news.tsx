import { toast } from "sonner";
import { useNewsData } from "../hooks/use-news-data";
import { News } from "../interfaces/news";
import NewsCard from "./ui/news-card";

export default function OpinionNews() {
    const { data, isLoading, error } = useNewsData();

    if (isLoading) {
        return <div className="text-center text-gray-600">Loading opinion news...</div>;
    }

    if (error) {
        toast.error("Ups..algo salió mal")
        return (
            <div className="text-center text-red-600">
                Error loading news: {error.message}
            </div>
        );
    }

    const opinionNews = data?.filter((news: News) => news.category === 'Opinion');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Opinion News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {opinionNews?.map((news: News) => (
                    <NewsCard key={news.id} {...news} />
                ))}
            </div>
        </div>
    );
}
