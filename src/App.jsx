import React, { useState } from 'react';

const STORE_DATA = {
  Laundry: {
    tagline: "Professional Care",
    landingImage: "/new3.jpg",
    description: "Expert cleaning and precision ironing for your garments.",
    products: [
      { id: "l1", name: "Wash & Steam Ironing", image: "/Untitled.jpg" },
      { id: "l2", name: "Dry Cleaning (Native)", image: "/laun.jpg" },
      { id: "l3", name: "Starch & Fold", image: "/images.jpg" },
      { id: "l4", name: "Premium Express Service", image: "/images1.jpg" },
    ]
  },
  Kaftan: {
    tagline: "Royal Heritage",
    landingImage: "/k1.jpg",
    description: "Exclusive designs from our Kaftan heritage line.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `k${i}`, name: `Premium Kaftan ${i + 1}`, image: `/k${i + 1}.jpg` 
    }))
  },
  Caps: {
    tagline: "Northern Excellence",
    landingImage: "/c1.jpg",
    description: "Hand-crafted excellence for the modern gentleman.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `c${i}`, name: `Original Cap ${i + 1}`, image: `/c${i + 1}.jpg` 
    }))
  },
  Jalabia: {
    tagline: "Executive Comfort",
    landingImage: "/j1.jpg",
    description: "Experience the prestige of our executive collection.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `j${i}`, name: `Executive Jalabia ${i + 1}`, image: `/j${i + 1}.jpg` 
    }))
  }
};

export default function App() {
  const [page, setPage] = useState("Landing");
  const WHATSAPP_LINK = "https://wa.me/2347034962409";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100">
      <div className="flex-grow">
        {page === "Landing" ? (
          <div className="relative min-h-screen w-full bg-black overflow-hidden">
            {/* Background Video Layer */}
            <div className="fixed inset-0 z-0">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 scale-105">
                <source src="/video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
            </div>

            {/* Header Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-32 px-6">
              <div className="text-center mb-20">
                <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-none italic">
                  Habu<br/>Peti
                </h1>
                <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 mb-4"></div>
                <p className="text-blue-400 tracking-[0.6em] font-bold text-[10px] uppercase">Excellence in Every Stitch</p>
              </div>

              {/* STYLING: The Staggered Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px]">
                {Object.keys(STORE_DATA).map((cat, index) => (
                  <div 
                    key={cat} 
                    onClick={() => { setPage(cat); window.scrollTo(0,0); }}
                    className={`group relative overflow-hidden cursor-pointer transition-all duration-700 
                      ${index % 2 === 0 ? 'h-[450px]' : 'h-[450px] md:mt-12'} rounded-[2.5rem]`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 flex flex-col justify-end p-8">
                      <h2 className="text-white text-4xl font-black uppercase tracking-tighter italic">{cat}</h2>
                    </div>
                    <img src={STORE_DATA[cat].landingImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cat} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Store View Styling */
          <div className="min-h-screen pt-32 px-6">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
              <span onClick={() => setPage("Landing")} className="font-black text-2xl uppercase tracking-tighter cursor-pointer">Habu Peti</span>
              <button onClick={() => setPage("Landing")} className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase">Back</button>
            </nav>
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-12">{page}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {STORE_DATA[page].products.map((item) => (
                  <div key={item.id} className="group border border-slate-50 p-4 rounded-3xl hover:shadow-xl transition-all">
                    <img src={item.image} className="w-full aspect-[3/4] object-cover rounded-2xl mb-4" alt={item.name} />
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                      <a href={`${WHATSAPP_LINK}`} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase">Order</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER: Placed outside flex-grow to stay at bottom. 
          z-20 ensures it stays above the video background in the landing page */}
      <footer className="relative z-20 bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">Habu Peti</h2>
            <p className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">Premium Native Heritage</p>
          </div>
          
          <div className="flex gap-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">WhatsApp</a>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Ijagbo, Offa, Nigeria</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase">
              © 2026 Habu Peti Heritage • Excellence in Every Stitch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}