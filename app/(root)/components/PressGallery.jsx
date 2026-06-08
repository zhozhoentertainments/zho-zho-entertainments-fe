"use client";

import React, { useState, useMemo, useRef } from 'react';

// Comprehensive dataset from your Press Report
const ALL_PRESS_DATA = [
  { id: 1, publication: "Newswire Online", link: "https://www.newswireonline.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "/logos/newswire-online.png" },
  { id: 2, publication: "Daily Global Reporter", link: "https://www.dailyglobalreporter.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 3, publication: "360 MAGAZINE", link: "https://www.three60magazine.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "/logos/360mag.png" },
  { id: 4, publication: "CEO BULLETIN", link: "https://www.ceobulletin.in/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "/logos/ceobulletin.png" },
  { id: 5, publication: "Submit Press Release India", link: "https://submitpressreleaseindia.com/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 6, publication: "GROW STARTUPS", link: "https://www.growstartups.live/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 7, publication: "FASHION PASSION", link: "https://www.fashionpassion.website/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 8, publication: "CURRENT CHRONICLES", link: "https://www.currentchronicles.in.net/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 9, publication: "Wellness World", link: "https://www.wellnessworld.today/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 10, publication: "NEWSFOREST", link: "https://newsforest.co.in/uncategorized/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 11, publication: "LATEST NEWS INBOX", link: "https://www.latestnewsinbox.com/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 12, publication: "MEN WOMEN magazine", link: "https://menwomenmagazine.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 13, publication: "NEWS MAKER INDIA", link: "https://www.newsmakerindia.co.in/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 14, publication: "STARTUPS INVESTORS", link: "https://startupsandinvestors.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 15, publication: "REALESTATEPRO", link: "https://realestatepro.co.in/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 16, publication: "Daily STARTUP MAGAZINE", link: "https://www.dailystartupmagazine.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 17, publication: "ASIAN EDUCATION JOURNAL", link: "https://www.asianeducationjournal.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 18, publication: "Discussions Digital", link: "https://www.discussions.digital/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 19, publication: "INDIAN NEWS", link: "https://www.theindiannews.co.in/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" },
  { id: 20, publication: "Advertising and Media NEWS", link: "https://advertisingandmedianews.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", logo: "" }
];

const ITEMS_PER_PAGE = 9;

export default function PressGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const galleryTopRef = useRef(null);

  const titleText = "Hyderabad Runs for a Cause: 1,500 Join 'Mind Over Miles' 10K to Champion Mental Health";
  const prDate = "12/11/2025";

  // Filter Logic
  const filteredArticles = useMemo(() => {
    return ALL_PRESS_DATA.filter(article => 
      article.publication.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Pagination Math
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    galleryTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Branding Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-orange-700 font-medium text-xs tracking-wider uppercase">Media Relations</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 sm:text-5xl tracking-tight">
          Orange Hub Press Room
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-500">
          Our standard coverage metrics across major publications and broadcast networks.
        </p>
      </div>

      {/* Control Actions Panel */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="text-sm text-slate-600 font-medium w-full sm:w-auto text-center sm:text-left">
          Total coverage: <span className="text-orange-600 font-bold">{filteredArticles.length} Sources</span>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search news channel..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800"
          />
          <svg className="w-4 h-4 absolute left-3 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Dynamic Target Ref */}
      <div ref={galleryTopRef} className="scroll-mt-6" />

      {/* Redesigned Card Grid */}
      <div className="max-w-7xl mx-auto">
        {paginatedArticles.length === 0 ? (
          <div className="bg-white rounded-xl border border-dashed border-slate-200 text-center py-16">
            <p className="text-slate-400 font-medium">No results matched your query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5"
              >
                {/* Brand Visual Logo Section */}
                <div className="bg-slate-100 h-32 w-full flex items-center justify-center p-4 relative overflow-hidden border-b border-b-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent z-0" />
                  {article.logo ? (
                    <img 
                      src={article.logo} 
                      alt={`${article.publication} logo`} 
                      className="max-h-16 max-w-[80%] object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105 z-10"
                    />
                  ) : (
                    <div className="flex flex-col items-center space-y-1 z-10">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 012 2v5a2 2 0 01-2 23m-2-4h.01M9 16h3m-3-4h6m-6-4h6" />
                      </svg>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center max-w-[180px] truncate">
                        {article.publication}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold tracking-wide uppercase">
                        Press Release
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{prDate}</span>
                    </div>
                    
                    <h4 className="text-slate-800 font-semibold text-sm sm:text-base line-clamp-3 leading-snug group-hover:text-orange-600 transition-colors">
                      "{titleText}"
                    </h4>
                  </div>
                </div>

                {/* Action Link Row */}
                <div className="border-t border-slate-50 px-5 py-3 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider">SOURCE ID: #{article.id}</span>
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Read Article
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fixed Pagination Section */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto mt-12 flex items-center justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-9 h-9 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  currentPage === pageNum
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </div>
  );
}