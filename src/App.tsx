import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Profile } from './components/Profile';
import { Contact } from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate initial load to match the original feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full relative selection:bg-nevasca-blue selection:text-white">
      {/* Liquid Cursor (Persistent) */}
      <Cursor />

      {/* Loading Screen */}
      <Loader isLoading={loading} />

      {/* Main Content - Only visible after loading (or transitions in) */}
      {!loading && (
        <>
          <Navigation />
          
          <main className="w-full">
            <section id="home" className="h-screen w-full">
              <Hero />
            </section>

            {/* Removed p-4 md:p-20 to allow full width content */}
            <section id="works" className="min-h-screen w-full flex flex-col justify-center">
              <Works />
            </section>

            <section id="profile" className="min-h-screen w-full flex flex-col justify-center py-20">
              <Profile />
            </section>

            <section id="contact" className="min-h-[70vh] w-full flex flex-col justify-center">
              <Contact />
            </section>
          </main>
        </>
      )}
    </div>
  );
}