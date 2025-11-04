import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const messages = [
  { id: 1, role: 'user', text: 'Hey! Can you draft a welcome message for our AI chat app?' },
  { id: 2, role: 'ai', text: 'Absolutely! Crafting a warm, concise message with a friendly tone and clear call to action...' },
  { id: 3, role: 'ai', text: 'Welcome to AIVibe — your intelligent assistant with real‑time responses, sleek design, and powerful features. Ask anything to begin!' },
];

export default function ChatPreview() {
  return (
    <section id="chat" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Live chat preview</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-black/10 dark:border-white/10 text-sm flex items-center justify-between">
              <span className="font-medium">Conversation • GPT‑4</span>
              <button className="text-xs px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition">New Chat</button>
            </div>
            <div className="p-4 space-y-4 max-h-[28rem] overflow-y-auto">
              {messages.map((m, idx) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'
                        : 'bg-black/5 dark:bg-white/10 text-black/90 dark:text-white/90 rounded-bl-sm'
                    }`}
                  >
                    {m.text}
                    {m.role === 'ai' && idx === 1 && (
                      <motion.span
                        className="inline-block ml-1 opacity-80"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        ▍
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-3 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Message AIVibe..."
                  className="w-full rounded-xl bg-black/5 dark:bg-white/10 px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/50"
                />
                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 text-sm shadow">
                  Send
                </button>
              </div>
            </div>
          </div>

          <ul id="features" className="space-y-4">
            {[
              {
                title: 'Authentication & Profiles',
                desc: 'Email login, JWT sessions, editable profiles and preferences.',
              },
              {
                title: 'Subscriptions',
                desc: 'Free daily limits with paid unlimited plans via Stripe.',
              },
              {
                title: 'Realtime AI Responses',
                desc: 'Streaming answers for a natural, low‑latency chat feel.',
              },
              {
                title: 'Beautiful Animations',
                desc: 'Framer Motion micro‑interactions and smooth transitions.',
              },
            ].map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/5 backdrop-blur"
              >
                <div className="font-medium">{f.title}</div>
                <div className="text-sm text-black/70 dark:text-white/70">{f.desc}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
