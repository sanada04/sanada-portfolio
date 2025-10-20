import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_tslv4rh', 'template_1lunha5', formData, 'xbJBGA3XqlSAsWNHT')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('メールが送信されました');
        setTimeout(() => setSuccessMessage(''), 3000);
      }, (err) => {
        console.log('FAILED...', err);
        // エラーメッセージの表示
      });

    // フォームをリセット
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="pt-32 pb-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>
              <p className="text-zinc-400 max-w-md">
                新しいプロジェクトやお問い合わせについて、お気軽にご連絡ください。
                48時間以内に返信させていただきます。
              </p>
              <div className="space-y-4">
                <p className="text-zinc-400">
                  <span className="text-white font-medium">Email:</span> dasana1214@gmail.com
                </p>
                <p className="text-zinc-400">
                  <span className="text-white font-medium">Location:</span> Saitama, Japan
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">お問い合わせ内容</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                >
                  送信する
                </motion.button>
              </form>
              {successMessage && (
                <div className="mt-4 text-green-500 text-center">
                  {successMessage}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
