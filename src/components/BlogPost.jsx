import { motion } from "framer-motion";
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blogPosts from '../data/blog-posts.json';

// 目次コンポーネント
function TableOfContents({ items }) {
  return (
    <nav className="p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
      <h2 className="!mt-0 text-lg font-semibold mb-6 flex items-center gap-2 text-white">
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h7" 
          />
        </svg>
        目次
      </h2>
      <ul className="space-y-3 !mb-0">
        {items.map((item, index) => (
          <li key={index} className="relative pl-5">
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block text-zinc-400 hover:text-white transition-all duration-300 hover:translate-x-1"
            >
              <span className="relative">
                {item}
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-zinc-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// 記事コンテンツをレンダリングするコンポーネント
function RenderContent({ content }) {
  switch (content.type) {
    case 'toc':
      return <TableOfContents items={content.content} />;
    case 'h2':
      return (
        <h2 
          id={content.content.toLowerCase().replace(/\s+/g, '-')}
          className="scroll-mt-20"
        >
          {content.content}
        </h2>
      );
    case 'h3':
      return (
        <h3 
          id={content.content.toLowerCase().replace(/\s+/g, '-')}
          className="scroll-mt-20"
        >
          {content.content}
        </h3>
      );
    case 'p':
      return <p>{content.content}</p>;
    case 'code':
      return (
        <pre>
          <code className={`language-${content.language}`}>
            {content.content}
          </code>
        </pre>
      );
    case 'ul':
      return (
        <ul>
          {content.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case 'blockquote':
      return <blockquote>{content.content}</blockquote>;
    default:
      return null;
  }
}

// PropTypesの定義
RenderContent.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.oneOf(['toc', 'h2', 'h3', 'p', 'code', 'ul', 'blockquote']).isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    language: PropTypes.string
  }).isRequired
};

TableOfContents.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.posts.find(post => post.id === slug);

  if (!post) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <p className="text-zinc-400">記事が見つかりません</p>
      </div>
    );
  }

  return (
    <article className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* カテゴリーと日付 */}
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span>{post.date}</span>
              <span>{post.category}</span>
            </div>

            {/* タイトル */}
            <h1 className="text-4xl font-bold tracking-tight">
              {post.title}
            </h1>

            {/* メイン画像 */}
            {post.image ? (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950" />
            )}

            {/* 記事本文 */}
            <div className="prose prose-invert prose-zinc lg:prose-lg max-w-none">
              {post.content.map((block, index) => (
                <RenderContent key={index} content={block} />
              ))}
            </div>

            {/* 記事一覧に戻るボタン */}
            <div className="pt-16 border-t border-zinc-800">
              <Link 
                to="/blog"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors group"
              >
                <svg 
                  className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" 
                  />
                </svg>
                記事一覧に戻る
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
