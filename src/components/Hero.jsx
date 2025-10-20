import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="container mx-auto px-4 pt-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center lg:justify-items-start">
          {/* テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:text-left order-2 lg:order-1"
          >
            <h2 className="text-zinc-500 text-xl font-medium tracking-widest">
              UI DESIGNER & FRONT-END ENGINEER
            </h2>
            <h1 className="text-6xl md:text-7xl font-bold">
              SANADA
            </h1>
            <p className="text-zinc-400 text-lg max-w-lg mx-auto lg:mx-0">
              クリエイティブなウェブ体験を作り出すフロントエンド開発者です。
              アクセシビリティ、SEOに考慮したサイトをご提供いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.a
                href="#projects" // アンカーを追加
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black text-center font-medium rounded-none hover:bg-zinc-200 transition-colors w-full sm:w-auto"
              >
                プロジェクトを見る
              </motion.a>
              <motion.a
                href="#contact" // アンカーを追加
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white text-center font-medium rounded-none hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
              >
                お問い合わせ
              </motion.a>
            </div>
          </motion.div>

          {/* 画像部分 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square h-[200px] lg:h-[100%] lg:w-[100%] order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 flex items-center justify-center">
              <span className="text-zinc-800 text-[80px] lg:text-[240px] font-bold tracking-tighter">
                St
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}