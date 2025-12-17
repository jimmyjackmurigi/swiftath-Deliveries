import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Top 5 Quiet Study Spots in Athi River",
      date: "Oct 12, 2025",
      excerpt: "Discover the best hidden gems to study while we bring the coffee to you.",
      image: "assets/blog1.png",
      category: "Study Tips"
    },
    {
      id: 2,
      title: "SwiftAth Launch Party!",
      date: "Oct 15, 2025",
      excerpt: "See photos from our campus launch event. Thanks for the warm welcome, Daystar!",
      image: "assets/blog2.png",
      category: "Events"
    },
    {
      id: 3,
      title: "Best Burger Joints on the App",
      date: "Oct 18, 2025",
      excerpt: "We ranked the juiciest burgers available for delivery right now.",
      image: "assets/blog3.png",
      category: "Foodie"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Campus News & Updates</h2>
          <div className="w-20 h-1 bg-energyOrange mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Stay in the loop with everything happening at SwiftAth and around campus.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-trustBlue z-10 uppercase tracking-wide shadow-sm">
                   {post.category}
                 </div>
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex items-center gap-2 text-xs font-medium text-energyOrange mb-3">
                  <i className="fa-regular fa-calendar"></i>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-trustBlue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                    <a href="#" className="inline-flex items-center text-trustBlue font-bold text-sm hover:text-energyOrange transition-colors group/link">
                      Read Article <i className="fa-solid fa-arrow-right ml-2 text-xs transform group-hover/link:translate-x-1 transition-transform"></i>
                    </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;