/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, ShoppingBag, Menu, Play, X, ChevronRight, ChevronLeft, Calendar, Info } from 'lucide-react';

export default function App() {
  const videos = [
    { id: 'v1', title: 'UFC 235: Jones vs Smith', date: '41.24.2019', img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800', videoId: 'L_LUpnjgPso' },
    { id: 'v2', title: 'Invicta FC (B6N6PICNY)', date: '05.07.2019', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
    { id: 'v3', title: 'World Lethwei Championship', date: '05.11.2019', img: 'https://images.unsplash.com/photo-1517438476312-10d79c67750d?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
    { id: 'v4', title: 'Bantamweight Championship', date: '05.12.2019', img: 'https://images.unsplash.com/photo-1599058917233-3583503c5e8e?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
    { id: 'v5', title: 'Heavyweight Showdown', date: '06.01.2019', img: 'https://images.unsplash.com/photo-1508218417376-a51bd1157f01?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
  ];

  const justAdded = [
    { id: 'v6', title: 'The Best of Bones', date: 'New Release', img: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
    { id: 'v7', title: 'Knockout Series Vol. 4', date: 'Just Added', img: 'https://images.unsplash.com/photo-1591117207239-788cd8599344?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
    { id: 'v8', title: 'Classic Fights: Silva', date: 'Vault', img: 'https://images.unsplash.com/photo-1517438322351-17d8960475d1?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
    { id: 'v9', title: 'Road to UFC 300', date: 'Originals', img: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=800', videoId: 'dQw4w9WgXcQ' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-red-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-display font-extrabold tracking-tighter text-white flex items-center gap-1">
            <span className="bg-red-600 px-1.5 py-0.5 rounded-sm">UFC</span>
            <span className="text-sm font-medium tracking-widest opacity-80">FIGHT PASS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-bold text-red-600 uppercase tracking-wider">Home</a>
            <a href="#" className="text-sm font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Browse</a>
            <a href="#" className="text-sm font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Schedule</a>
            <a href="#" className="text-sm font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">More</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=100&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tight leading-[0.9] mb-6">
            UFC 235: <br />
            <span className="text-white">JONES VS SMITH</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
            Relive all the action as Jon Jones returned to defend his title against Anthony Smith from the T-Mobile Arena in Las Vegas, Nevada.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#v1" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-widest transition-all flex items-center gap-2 group"
            >
              <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              Watch Now
            </a>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 font-bold uppercase tracking-widest transition-all border border-white/20">
              The Best of Bones
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/30'}`} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors hidden md:block">
          <ChevronLeft size={40} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors hidden md:block">
          <ChevronRight size={40} />
        </button>
      </section>

      {/* Video Rows */}
      <main className="relative z-10 -mt-20 pb-20 space-y-12 px-6 md:px-12">
        {/* Row 1: Upcoming */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Upcoming</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
            {videos.map((video) => (
              <a 
                key={video.id}
                href={`#${video.id}`}
                className="flex-none w-72 md:w-80 group relative aspect-video overflow-hidden rounded-sm bg-zinc-900 border border-white/5 hover:border-red-600/50 transition-all duration-300"
              >
                <img 
                  src={video.img} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 border border-white/10">
                  <Calendar size={10} className="text-red-500" />
                  {video.date}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide group-hover:text-red-500 transition-colors truncate">
                    {video.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Row 2: Just Added */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Just Added to UFC Fight Pass!</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
            {justAdded.map((video) => (
              <a 
                key={video.id}
                href={`#${video.id}`}
                className="flex-none w-72 md:w-80 group relative aspect-video overflow-hidden rounded-sm bg-zinc-900 border border-white/5 hover:border-red-600/50 transition-all duration-300"
              >
                <img 
                  src={video.img} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-3 right-3 bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter">
                  New
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide group-hover:text-red-500 transition-colors truncate">
                    {video.title}
                  </h3>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6">
            <div className="text-xl font-display font-extrabold tracking-tighter text-white flex items-center gap-1">
              <span className="bg-red-600 px-1.5 py-0.5 rounded-sm">UFC</span>
              <span className="text-xs font-medium tracking-widest opacity-80">FIGHT PASS</span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              The world's premier combat sports streaming service. Live events, original programming, and the world's largest fight library.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Platform</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Devices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2024 Zuffa, LLC. All rights reserved. Part of TKO Group Holdings.
          </p>
        </div>
      </footer>

      {/* Modals (CSS-only via :target) */}
      {[...videos, ...justAdded].map((video) => (
        <div key={video.id} id={video.id} className="modal-overlay">
          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl mx-4">
            <a 
              href="#" 
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 uppercase text-xs font-bold tracking-widest"
            >
              Close <X size={20} />
            </a>
            
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-display font-bold uppercase tracking-tight">{video.title}</h2>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded">
                  {video.date}
                </span>
              </div>
              <div className="flex gap-4">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Info size={20} /></button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Calendar size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
