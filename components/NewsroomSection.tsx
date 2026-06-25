"use client";

import { useEffect, useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function NewsroomSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  if (news.length === 0) {
    return <section id="newsroom" className="py-24 bg-white"><div className="text-center">Loading News...</div></section>;
  }

  return (
    <section id="newsroom" className="relative z-10 py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 mb-4">Latest Briefings</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Newsroom
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article) => (
            <div key={article.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="text-xs text-slate-400 font-mono mb-4">
                {new Date(article.created_at).toLocaleDateString()}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {article.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
