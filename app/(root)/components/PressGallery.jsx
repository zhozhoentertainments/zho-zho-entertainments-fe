"use client";

import React, { useState, useMemo, useRef } from 'react';

// Updated dataset with 'profileLink' added to objects
const ALL_PRESS_DATA = [
  { id: 1, publication: "Newswire Online", link: "https://www.newswireonline.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "https://www.newswireonline.com" },
  { id: 2, publication: "Daily Global Reporter", link: "https://www.dailyglobalreporter.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 3, publication: "360 MAGAZINE", link: "https://www.three60magazine.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "https://www.three60magazine.com" },
  { id: 4, publication: "CEO BULLETIN", link: "https://www.ceobulletin.in/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "https://www.ceobulletin.in" },
  { id: 5, publication: "Submit Press Release India", link: "https://submitpressreleaseindia.com/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 6, publication: "GROW STARTUPS", link: "https://www.growstartups.live/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 7, publication: "FASHION PASSION", link: "https://www.fashionpassion.website/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 8, publication: "CURRENT CHRONICLES", link: "https://www.currentchronicles.in.net/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 9, publication: "Wellness World", link: "https://www.wellnessworld.today/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 10, publication: "NEWSFOREST", link: "https://newsforest.co.in/uncategorized/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 11, publication: "LATEST NEWS INBOX", link: "https://www.latestnewsinbox.com/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 12, publication: "MEN WOMEN magazine", link: "https://menwomenmagazine.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 13, publication: "NEWS MAKER INDIA", link: "https://www.newsmakerindia.co.in/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 14, publication: "STARTUPS INVESTORS", link: "https://startupsandinvestors.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 15, publication: "REALESTATEPRO", link: "https://realestatepro.co.in/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 16, publication: "Daily STARTUP MAGAZINE", link: "https://www.dailystartupmagazine.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 17, publication: "ASIAN EDUCATION JOURNAL", link: "https://www.asianeducationjournal.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 18, publication: "Discussions Digital", link: "https://www.discussions.digital/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 19, publication: "INDIAN NEWS", link: "https://www.theindiannews.co.in/sports/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" },
  { id: 20, publication: "Advertising and Media NEWS", link: "https://advertisingandmedianews.com/hyderabad-runs-for-a-cause-1500-join-mind-over-miles-10k-to-champion-mental-health/", profileLink: "" }
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Branding Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-orange-700 font-bold text-xs tracking-wider uppercase">Featured Coverage</span>
        </div>
        <h1 className="text-4xl font-black text-slate-950 sm:text-6xl tracking-tight mb-4">
          Our Press Room
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium text-slate-600 bg-white/60 backdrop-blur-sm py-2 px-6 rounded-2xl border border-slate-200/50 inline-block shadow-sm">
          🚀 We are already featured in more than <span className="text-orange-600 font-extrabold text-lgsm:text-xl">140+ links</span> across global networks.
        </p>
      </div>

      {/* Control Actions Panel */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <div className="text-sm text-slate-600 font-semibold w-full sm:w-auto text-center sm:text-left">
          Showing <span className="text-orange-600 font-extrabold">{filteredArticles.length} Live Sources</span>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search news network..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800"
          />
          <svg className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Dynamic Target Ref */}
      <div ref={galleryTopRef} className="scroll-mt-6" />

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto">
        {paginatedArticles.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-200 text-center py-16 shadow-inner">
            <p className="text-slate-400 font-medium">No networks matched your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative"
              >
                {/* Clickable Area for the Main Article Link */}
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label={`Read article on ${article.publication}`}
                />

                {/* Header: News Name Section (Big & Eye-Catchy) */}
                <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 min-h-[110px] w-full flex items-center justify-center p-6 relative border-b border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.03] to-transparent" />
                  
                  <div className="text-center px-2 z-10 w-full">
                    {/* Check if profile link is available */}
                    {article.profileLink ? (
                      <div className="inline-block relative z-20">
                        <a 
                          href={article.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base sm:text-lg font-black text-slate-950 uppercase tracking-tight group-hover:text-orange-600 transition-colors block leading-tight border-b-2 border-dotted border-orange-400 hover:border-orange-600"
                        >
                          {article.publication} 🔗
                        </a>
                      </div>
                    ) : (
                      <span className="text-base sm:text-lg font-black text-slate-950 uppercase tracking-tight group-hover:text-orange-600 transition-colors block leading-tight">
                        {article.publication}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-10 pointer-events-none">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full font-extrabold tracking-wider uppercase shadow-sm">
                        Live Press
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{prDate}</span>
                    </div>
                    
                    <h4 className="text-slate-700 font-medium text-sm sm:text-base line-clamp-3 leading-relaxed group-hover:text-slate-900 transition-colors">
                      "{titleText}"
                    </h4>
                  </div>
                </div>

                {/* Action Link Row */}
                <div className="border-t border-slate-50 px-6 py-4 bg-slate-50/50 flex items-center justify-between relative z-10 pointer-events-none">
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider">MEDIA ID: #{article.id}</span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-600 group-hover:text-orange-700 transition-colors">
                    Read Full Story
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto mt-14 flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
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
                className={`w-10 h-10 text-xs sm:text-sm font-black rounded-xl transition-all shadow-sm ${
                  currentPage === pageNum
                    ? 'bg-orange-600 text-white'
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
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
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