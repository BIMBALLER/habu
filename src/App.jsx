import React, { useState } from 'react';

<<<<<<< HEAD
const STORE_DATA = {
  Laundry: {
    tagline: "Professional Care",
    landingImage: "/new3.jpg",
    description: "Expert cleaning and precision ironing for your garments.",
=======
// --- DATA CONFIGURATION ---
const STORE_DATA = {
  Laundry: {
    tagline: "Professional Care",
    landingImage: "/laundry landing.jpg", // Change this to your finest laundry photo
    description: "Expert cleaning and precision ironing for your most valued garments.",
>>>>>>> main
    products: [
      { id: "l1", name: "Wash & Steam Ironing", image: "/Untitled.jpg" },
      { id: "l2", name: "Dry Cleaning (Native)", image: "/laun.jpg" },
      { id: "l3", name: "Starch & Fold", image: "/images.jpg" },
      { id: "l4", name: "Premium Express Service", image: "/images1.jpg" },
    ]
  },
  Kaftan: {
    tagline: "Royal Heritage",
<<<<<<< HEAD
    landingImage: "/k1.jpg",
    description: "Exclusive designs from our Kaftan heritage line.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `k${i}`, name: `Premium Kaftan ${i + 1}`, image: `/k${i + 1}.jpg` 
=======
    landingImage: "/kaftan landing.jpg", // A 'finer' hero image for the landing card
    description: "Showing 15 exclusive designs from our Kaftan heritage line.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `k${i}`,
      name: `Premium Kaftan ${i + 1}`,
      image: `/k${i + 1}.jpg` 
>>>>>>> main
    }))
  },
  Caps: {
    tagline: "Northern Excellence",
<<<<<<< HEAD
    landingImage: "/c1.jpg",
    description: "Hand-crafted excellence for the modern gentleman.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `c${i}`, name: `Original Cap ${i + 1}`, image: `/c${i + 1}.jpg` 
=======
    landingImage: "/EIHwxU3WwAEFrRR.jpg",
    description: "Hand-crafted northern excellence for the modern gentleman.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `c${i}`,
      name: `Original Cap ${i + 1}`,
      image: `/c${i + 1}.jpg` 
>>>>>>> main
    }))
  },
  Jalabia: {
    tagline: "Executive Comfort",
<<<<<<< HEAD
    landingImage: "/j1.jpg",
    description: "Experience the prestige of our executive collection.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `j${i}`, name: `Executive Jalabia ${i + 1}`, image: `/j${i + 1}.jpg` 
=======
    landingImage: "/jalabia landing.jpg",
    description: "Experience the prestige of our executive Jalabia collection.",
    products: Array.from({ length: 15 }, (_, i) => ({
      id: `j${i}`,
      name: `Executive Jalabia ${i + 1}`,
      image: `/j${i + 1}.jpg` 
>>>>>>> main
    }))
  }
};

export default function App() {
  const [page, setPage] = useState("Landing");
<<<<<<< HEAD
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
=======

  const WHATSAPP_LINK = "https://wa.me/2347034962409"; 
  const CALL_LINK = "tel:+2347070369716";
  const FACEBOOK_LINK = "https://facebook.com/your-page-link";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100">
      
      <div className="flex-grow">
        {page === "Landing" ? (
          /* --- ENHANCED LANDING VIEW --- */
          <div className="relative min-h-screen w-full bg-black overflow-hidden">
            <div className="fixed inset-0 z-0">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 scale-105">
                <source src="/video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
            </div>

            {/* Glass Nav */}
            <div className="absolute top-8 right-8 z-50 flex gap-4">
              <a href={CALL_LINK} className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase">CALL</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] hover:bg-blue-500 transition-all shadow-xl uppercase">WHATSAPP</a>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-40 px-6">
              <div className="text-center mb-24 animate-in fade-in zoom-in duration-1000">
                <h1 className="text-8xl md:text-[12rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-6 italic">
                  Habu<br/>Peti
                </h1>
                <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-blue-400 tracking-[0.8em] font-bold text-[11px] uppercase ml-[0.8em]">Excellence in Every Stitch</p>
              </div>

              {/* Redesigned Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1600px]">
                {Object.keys(STORE_DATA).map((cat, index) => (
                  <div 
                    key={cat}
                    onClick={() => { setPage(cat); window.scrollTo(0,0); }}
                    className={`group relative overflow-hidden cursor-pointer transition-all duration-1000
                      ${index % 2 === 0 ? 'h-[500px] mt-0' : 'h-[500px] md:mt-12'} rounded-[2rem] md:rounded-[4rem]`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 flex flex-col justify-end p-12">
                      <p className="text-blue-500 font-black text-[10px] tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Explore Collection</p>
                      <h2 className="text-white text-5xl font-black uppercase tracking-tighter leading-none italic">{cat}</h2>
                    </div>
                    <img 
                      src={STORE_DATA[cat].landingImage} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                      alt={cat} 
                    />
>>>>>>> main
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
<<<<<<< HEAD
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
=======
          /* --- STORE VIEW --- */
          <div className="min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-100 px-8 py-6 flex justify-between items-center">
              <span onClick={() => setPage("Landing")} className="font-black text-black uppercase tracking-tighter text-2xl cursor-pointer">Habu Peti</span>
              <div className="hidden lg:flex gap-10">
                {Object.keys(STORE_DATA).map(cat => (
                  <button key={cat} onClick={() => { setPage(cat); window.scrollTo(0,0); }} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${page === cat ? 'text-blue-600' : 'text-slate-400 hover:text-black'}`}>{cat}</button>
                ))}
              </div>
              <button onClick={() => setPage("Landing")} className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">CLOSE</button>
            </nav>

            <main className="pt-40 px-8 max-w-[1400px] mx-auto pb-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="text-left">
                  <span className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase mb-4 block">{STORE_DATA[page].tagline}</span>
                  <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">{page}</h2>
                </div>
                <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed border-l border-slate-200 pl-8">{STORE_DATA[page].description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {STORE_DATA[page].products.map((item) => (
                  <div key={item.id} className="group">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 mb-8 transition-transform duration-500 hover:-translate-y-2">
                      <img src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.name} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                         </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start px-2">
                      <h3 className="font-bold text-lg tracking-tight text-slate-900 uppercase italic w-1/2 leading-tight">{item.name}</h3>
                      <a 
                        href={`${WHATSAPP_LINK}?text=I want to order: ${item.name}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-blue-600 text-white px-5 py-3 rounded-xl font-black text-[9px] tracking-widest uppercase hover:bg-black transition-all"
                      >
                        Order Now
                      </a>
>>>>>>> main
                    </div>
                  </div>
                ))}
              </div>
<<<<<<< HEAD
            </div>
=======
            </main>
>>>>>>> main
          </div>
        )}
      </div>

<<<<<<< HEAD
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
=======
      <footer className="bg-slate-950 text-white pt-32 pb-16 px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 text-left">
            <div className="col-span-1 md:col-span-2">
              <span className="text-4xl font-black uppercase tracking-tighter text-white">Habu Peti</span>
              <p className="mt-8 text-slate-500 max-w-sm leading-relaxed text-sm">Distinguished northern apparel and premium garment care. We define the standard for the modern gentleman.</p>
            </div>
            <div>
              <h4 className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-8">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                {Object.keys(STORE_DATA).map(cat => (
                  <li key={cat} className="hover:text-white cursor-pointer transition-colors" onClick={() => { setPage(cat); window.scrollTo(0,0); }}>{cat} Store</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-8">Social</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href={CALL_LINK} className="hover:text-white transition-colors">Call Office</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex justify-between items-center">
            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.8em]">© 2026 Habu Peti Heritage</p>
>>>>>>> main
          </div>
        </div>
      </footer>
    </div>
  );
}