"use client";

import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";

interface NewsArticle {
  title: string;
  headline: string;
  pubDate: string;
  link: string;
  description: string;
  source: string;
}

const COUNTRIES = [
  "India",
  "United States",
  "China",
  "Russia",
  "Israel",
  "Ukraine",
  "United Kingdom",
  "France"
];

type TabType = "national" | "war" | "impact";

export default function NewsroomDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("national");
  const [selectedCountry, setSelectedCountry] = useState<string>("India");
  const [selectedSource, setSelectedSource] = useState<string>("ALL");
  
  const [nationalNews, setNationalNews] = useState<NewsArticle[]>([]);
  const [warNews, setWarNews] = useState<NewsArticle[]>([]);
  const [economicNews, setEconomicNews] = useState<NewsArticle[]>([]);
  
  const [loadingNational, setLoadingNational] = useState(true);
  const [loadingWar, setLoadingWar] = useState(true);
  const [loadingEco, setLoadingEco] = useState(true);

  const fetchRSS = async (query: string): Promise<NewsArticle[]> => {
    try {
      const encodedQuery = encodeURIComponent(query);
      const rssUrl = encodeURIComponent(`https://news.google.com/rss/search?q=${encodedQuery}&hl=en-US&gl=US&ceid=US:en`);
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
      const data = await res.json();
      
      const items = data.items || [];
      return items.map((item: any) => {
        const parts = item.title.split(" - ");
        const source = parts.length > 1 ? parts.pop() : "Unknown Source";
        const headline = parts.join(" - ");
        return {
          ...item,
          source: source.trim(),
          headline: headline.trim()
        };
      });
    } catch (err) {
      console.error("Failed to fetch RSS:", err);
      return [];
    }
  };

  useEffect(() => {
    let isMounted = true;
    setLoadingNational(true);
    fetchRSS(`${selectedCountry} military defense national security`)
      .then((items) => {
        if (isMounted) {
          setNationalNews(items);
          setLoadingNational(false);
          setSelectedSource("ALL");
        }
      });
    return () => { isMounted = false; };
  }, [selectedCountry]);

  useEffect(() => {
    let isMounted = true;
    fetchRSS(`active military conflict war frontline combat`)
      .then((items) => {
        if (isMounted) {
          setWarNews(items);
          setLoadingWar(false);
        }
      });
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    let isMounted = true;
    fetchRSS(`defense industry weapons export sales supply chain military economic impact`)
      .then((items) => {
        if (isMounted) {
          setEconomicNews(items);
          setLoadingEco(false);
        }
      });
    return () => { isMounted = false; };
  }, []);

  const formatTerminalDate = (dateString: string) => {
    const d = new Date(dateString);
    const time = d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
    return { time, date };
  };

  const cleanHTML = (html: string) => {
    return html.replace(/<[^>]+>/g, '').trim();
  };

  const renderTerminalRow = (article: NewsArticle, index: number, colorClass: string) => {
    const { time, date } = formatTerminalDate(article.pubDate);
    const isEven = index % 2 === 0;
    const cleanDesc = cleanHTML(article.description);

    return (
      <a 
        key={article.link} 
        href={article.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`group flex items-start w-full border-b border-white/[0.05] hover:bg-white/[0.05] transition-colors py-4 px-4 cursor-pointer ${isEven ? 'bg-black/40' : 'bg-transparent'}`}
      >
        {/* TIME / DATE / SOURCE COL */}
        <div className="w-[120px] md:w-[150px] shrink-0 flex flex-col gap-2 pt-1">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/40 group-hover:text-white/70">
            <div className={`w-1.5 h-1.5 rounded-full ${colorClass}`}></div>
            <span>{time}</span>
          </div>
          <div className="font-mono text-[9px] tracking-widest text-white/30 pl-3">
            {date}
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-[#06B6D4] mt-2 border border-[#06B6D4]/30 bg-[#06B6D4]/5 px-1 py-0.5 inline-block w-max max-w-[120px] truncate">
            {article.source}
          </div>
        </div>

        {/* HEADLINE & DESCRIPTION COL */}
        <div className="flex-1 flex flex-col pl-4 border-l border-white/5 group-hover:border-white/20 transition-colors">
          <div className="text-sm md:text-base font-medium text-white/90 group-hover:text-white mb-2 leading-snug">
            {article.headline}
          </div>
          <div className="text-xs text-white/50 leading-relaxed font-light line-clamp-3 md:line-clamp-2">
            {cleanDesc}
          </div>
        </div>

        {/* ACTION COL */}
        <div className="w-[60px] md:w-[80px] shrink-0 text-[10px] font-mono uppercase tracking-[0.2em] text-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity text-right pt-1">
          [ OPEN ]
        </div>
      </a>
    );
  };

  const renderTerminalFeed = (allArticles: NewsArticle[], isLoading: boolean, colorClass: string, tabIdentifier: string) => {
    if (isLoading) {
      return (
        <div className="w-full h-64 flex flex-col items-center justify-center border border-white/10 bg-black/60 backdrop-blur-md">
          <span className="w-3 h-3 border-2 border-t-[#06B6D4] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></span>
          <div className="text-[#06B6D4] font-mono text-[10px] uppercase tracking-widest">Querying Global Database...</div>
        </div>
      );
    }

    const uniqueSources = Array.from(new Set(allArticles.map(a => a.source))).sort();
    const filteredArticles = selectedSource === "ALL" 
      ? allArticles 
      : allArticles.filter(a => a.source === selectedSource);

    return (
      <div className="animate-[fadeIn_0.5s_ease-out] w-full">
        
        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 bg-black/80 border border-white/10 p-3 gap-4">
          <div className="flex items-center gap-4">
            {tabIdentifier === "national" && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">COUNTRY:</span>
                <select 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="appearance-none bg-transparent text-[#06B6D4] text-[10px] font-mono focus:outline-none cursor-pointer uppercase tracking-widest border-b border-white/20 pb-1"
                >
                  {COUNTRIES.map(country => (
                    <option key={country} value={country} className="bg-black text-white">{country}</option>
                  ))}
                </select>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">CHANNEL:</span>
              <select 
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="appearance-none bg-transparent text-[#06B6D4] text-[10px] font-mono focus:outline-none cursor-pointer uppercase tracking-widest border-b border-white/20 pb-1 w-[150px] truncate"
              >
                <option value="ALL" className="bg-black text-white">ALL CHANNELS</option>
                {uniqueSources.map(source => (
                  <option key={source} value={source} className="bg-black text-white">{source}</option>
                ))}
              </select>
            </div>
          </div>

          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest text-right">
            {filteredArticles.length} RECORDS FOUND
          </span>
        </div>

        {/* FEED CONTENT */}
        <div className="border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl w-full">
          {/* HEADER ROW */}
          <div className="flex w-full bg-white/5 border-b border-white/10 py-3 px-4 font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
            <div className="w-[120px] md:w-[150px] shrink-0">METADATA</div>
            <div className="flex-1 pl-4">INTELLIGENCE REPORT</div>
            <div className="w-[60px] md:w-[80px] shrink-0 text-right">ACTION</div>
          </div>

          <div className="flex flex-col max-h-[70vh] overflow-y-auto custom-terminal-scrollbar min-h-[500px]">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, i) => renderTerminalRow(article, i, colorClass))
            ) : (
              <div className="w-full py-10 text-center">
                <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest">No signals intercepted for selected channel.</div>
              </div>
            )}
          </div>
        </div>

      </div>
    );
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedSource("ALL");
  };

  return (
    <section className="relative w-full min-h-screen text-white pt-24 pb-12 selection:bg-[#06B6D4] selection:text-black font-sans bg-transparent">
      <VideoBackground />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* BLOOMBERG-STYLE HEADER */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-end gap-6 bg-black/80 border border-white/10 p-6 backdrop-blur-xl">
          <div>
            <div className="text-[9px] font-mono text-[#06B6D4] uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#06B6D4] animate-pulse"></span> TRINETRA INTELLIGENCE TERMINAL V1.4
            </div>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-white uppercase">
              Global <span className="font-semibold text-white/80">Data Feed</span>
            </h1>
          </div>
          <div className="text-right flex items-center gap-6">
            <div className="hidden md:block">
              <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest mb-1">SYSTEM TIME (UTC)</p>
              <p className="text-sm font-mono text-white">{new Date().toISOString().replace('T', ' ').substring(0, 19)}</p>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest mb-1">CONNECTION</p>
              <p className="text-sm font-mono text-green-500 uppercase">SECURE</p>
            </div>
          </div>
        </div>

        {/* TAB BAR */}
        <div className="flex overflow-x-auto mb-6 hide-scrollbar gap-2">
          <button 
            onClick={() => handleTabChange("national")}
            className={`px-6 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 border ${activeTab === "national" ? "text-black bg-[#06B6D4] border-[#06B6D4]" : "text-white/50 border-white/10 bg-black/50 hover:text-white hover:bg-white/5"}`}
          >
            [1] National Security
          </button>
          <button 
            onClick={() => handleTabChange("war")}
            className={`px-6 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 border ${activeTab === "war" ? "text-white bg-red-600 border-red-600" : "text-white/50 border-white/10 bg-black/50 hover:text-white hover:bg-white/5"}`}
          >
            [2] Active Conflicts
          </button>
          <button 
            onClick={() => handleTabChange("impact")}
            className={`px-6 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 border ${activeTab === "impact" ? "text-black bg-emerald-500 border-emerald-500" : "text-white/50 border-white/10 bg-black/50 hover:text-white hover:bg-white/5"}`}
          >
            [3] Industrial Impact
          </button>
        </div>

        {/* CONTENT PANELS */}
        <div className="w-full">
          {activeTab === "national" && renderTerminalFeed(nationalNews, loadingNational, "bg-[#06B6D4] shadow-[0_0_5px_#06B6D4]", "national")}
          {activeTab === "war" && renderTerminalFeed(warNews, loadingWar, "bg-red-500 shadow-[0_0_5px_#ef4444]", "war")}
          {activeTab === "impact" && renderTerminalFeed(economicNews, loadingEco, "bg-emerald-500 shadow-[0_0_5px_#10b981]", "impact")}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .custom-terminal-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.5); 
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2); 
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.8); 
        }
      `}} />
    </section>
  );
}
