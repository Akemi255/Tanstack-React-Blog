import { createFileRoute } from '@tanstack/react-router';
import { useNewsData } from '../../hooks/use-news-data';
import { News } from '../../interfaces/news';

export const Route = createFileRoute('/posts/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    const { data, isLoading, error } = useNewsData();

    if (isLoading) {
        return <div className="text-center text-gray-600">Loading...</div>;
    }

    if (error) {
        return (
            <div className="text-center text-red-600">
                Error loading news: {error.message}
            </div>
        );
    }

    const newsItem = data?.find((news: News) => news.id.toString() === id);

    if (!newsItem) {
        return <div className="text-center text-red-600">News not found</div>;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{newsItem.title}</h1>

            <div className="mb-6">
                <img
                    src={newsItem.imageUrl}
                    alt={newsItem.title}
                    className="w-full h-80 object-contain rounded-lg mb-4"
                />
            </div>

            <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-600">{new Date(newsItem.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">Category: {newsItem.category}</p>
            </div>

            <div className="text-lg text-gray-700 mb-8">
                <p>{newsItem.content}</p>
            </div>
        </div>
    );
}
