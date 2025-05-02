import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Sustainable Construction Practices',
    excerpt: 'Learn how sustainable building methods can reduce environmental impact and improve efficiency.',
    date: '2024-04-10',
    link: '#',
  },
  {
    id: 2,
    title: 'Top Trends in Commercial Construction',
    excerpt: 'Explore the latest trends shaping the commercial construction industry in 2024.',
    date: '2024-03-22',
    link: '#',
  },
  {
    id: 3,
    title: 'How to Choose the Right Contractor',
    excerpt: 'Tips and advice for selecting a reliable and experienced construction contractor.',
    date: '2024-02-15',
    link: '#',
  },
];

const BlogInsights = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Blog & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="block p-6 border rounded-lg shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <p className="text-sm text-secondary">{new Date(post.date).toLocaleDateString()}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
