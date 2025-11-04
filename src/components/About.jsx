export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">About</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-zinc-400 leading-relaxed">
            フロントエンド開発に情熱を持つエンジニアです。
            ユーザー体験を重視した開発を心がけ、モダンな技術スタックを用いて
            効率的で保守性の高いコードを書くことを目指しています。<br></br>
            リニューアル、WordPress化、新規構築、保守運用もお任せください。
          </p>
          <div className="mt-8">
            <h3 className="font-bold mb-2 text-white">経歴</h3>
            <ul className="list-disc list-inside text-zinc-400">
              <li>専門学校 Webデザイン科 卒業</li>
              <li>株式会社ミツエーリンクス Webエンジニア&UIデザイナー（2020.4-2025.10）</li>
              <li>仕事探中...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}