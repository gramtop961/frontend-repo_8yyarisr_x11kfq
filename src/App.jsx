import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatPreview from './components/ChatPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-purple-200/60 dark:selection:bg-purple-400/30">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(60rem_40rem_at_100%_20%,rgba(139,92,246,0.18),transparent)]" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <ChatPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
