import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from '../data/blog-posts.json';

export function Blog() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // フィルター用のstate
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // postsをJSONから読み込む
  const { posts } = blogPosts;

  // カテゴリーの一覧を取得
  const categories = ['all', ...new Set(posts.map(post => post.category))];

  // 投稿を絞り込む
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pt-8 pb-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-16 tracking-tight"
          >
            Blog
          </motion.h2>

          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* 記事一覧 */}
            <motion.div
              ref={ref}
              className="lg:flex-1"
            >
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-4 rounded-xl transition-all duration-300 hover:bg-zinc-900/50 hover:shadow-[0_0_25px_-5px] hover:shadow-zinc-800/50"
                    >
                      <Link to={`/blog/${post.id}`} className="block">
                        <div className="overflow-hidden rounded-lg mb-4">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-40 bg-gradient-to-br from-zinc-800 to-zinc-950 transition-transform duration-300 group-hover:scale-105" />
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <span>{post.date}</span>
                            <span>{post.category}</span>
                          </div>
                          <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                            {post.description}
                          </p>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 px-4"
                >
                  <p className="text-zinc-400 text-lg mb-2">
                    検索条件に一致する記事が見つかりませんでした
                  </p>
                  <p className="text-zinc-500 text-sm">
                    検索キーワードを変更するか、カテゴリーを「All Categories」に戻してお試しください
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* サイドバー */}
            <div className="lg:w-64 space-y-8 lg:border-l lg:border-zinc-800 lg:pl-8">
              {/* 検索ボックス */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-zinc-400">Search</h3>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="記事を検索..."
                  className="w-full px-4 py-2 bg-zinc-900 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
              </div>

              {/* カテゴリーフィルター */}
              <div className="space-y-2 pb-8 lg:pb-0">
                <h3 className="text-sm font-medium text-zinc-400">Categories</h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-zinc-800 text-white'
                          : 'text-zinc-400 hover:bg-zinc-900'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
