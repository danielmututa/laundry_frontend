import React from 'react';

// Define the article type for TypeScript
interface Article {
  id: number;
  title: string;
  image: string;
  category: 'Articles' | 'Resources' | 'Tips';
  date: string;
  excerpt?: string;
}

const Articles: React.FC = () => {
  // Sample data based on the images
  const articles: Article[] = [
    {
      id: 1,
      title: '6 useful tips for cleaning your most delicate clothes',
      image: '/images/white-blue-shirts.jpg',
      category: 'Articles',
      date: 'Oct 4, 2023',
      excerpt: 'Aliquet lectus cursus vitae lectus nulla feugiat. Odio scelerisque viverra sit enimisit ultrices nunc rhoncus tortor semper maecened.'
    },
    {
      id: 2,
      title: '10 easy and effective methods to remove oil stains',
      image: '/images/oil-stain-shirt.jpg',
      category: 'Resources',
      date: 'Oct 5, 2023'
    },
    {
      id: 3,
      title: 'How frequently should you wash your clothes?',
      image: '/images/blue-shirts-hanging.jpg',
      category: 'Tips',
      date: 'Oct 5, 2023'
    },
    {
      id: 4,
      title: 'How to choose the right machine at the laundromat',
      image: '/images/folded-jeans.jpg',
      category: 'Articles',
      date: 'Oct 5, 2023'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">
          <span className="text-navy-900">Read our latest </span>
          <span className="text-blue-400">articles</span>
          <br />
          <span className="text-blue-400">about laundry</span>
        </h2>
        <button className="border-2 border-gray-800 rounded-full px-6 py-3 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
          Browser all articles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Featured article - larger size */}
        <div className="col-span-1 md:col-span-1">
          <div className="h-64 md:h-80 bg-gray-200 rounded-lg mb-4 overflow-hidden">
            <img 
              src={articles[0].image} 
              alt={articles[0].title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-blue-400 border border-blue-400 rounded-full px-4 py-1">
              {articles[0].category}
            </span>
            <span className="text-gray-500">{articles[0].date}</span>
          </div>
          <h3 className="text-3xl font-bold text-blue-400 mb-3">{articles[0].title}</h3>
          {articles[0].excerpt && (
            <p className="text-gray-600 mb-4">{articles[0].excerpt}</p>
          )}
        </div>

        {/* Right side articles - smaller size */}
        <div className="col-span-1 md:col-span-1 space-y-8">
          {articles.slice(1).map((article) => (
            <div key={article.id} className="flex gap-4">
              <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-400 border border-blue-400 rounded-full px-3 py-0.5 text-sm">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                <a href="#" className="text-blue-400 inline-flex items-center">
                  Read article 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;