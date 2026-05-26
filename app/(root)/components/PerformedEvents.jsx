import React, { useState, useEffect, useRef } from 'react';

export default function PerformedEvents() {
  const events = [
    {
      id: 1,
      title: "Mind Over Miles",
      subtitle: "A Run For Mental Health Wellness",
      tagline: "Our journey starts with Mind Over Miles — a pilot run event dedicated to raising awareness around mental health. This isn’t just a run; it’s a movement. At the heart of this initiative lies a powerful message: that the strength of the mind can carry us through any distance",
      status: "COMPLETED",
      date: "09/11/2025",
      venue: "Gachibowli Stadium, Hyderabad",
      categories: [
        { name: "5K Fun Run/Walk", desc: "For everyone who wants to participate and show support. Untimed." },
        { name: "10K Timed Run", desc: "For those who want to challenge themselves with tracked timing." },
        { name: "Virtual Run", desc: "For those who can't make it to the venue but still want to contribute." }
      ],
      images: [
        "/orangehub/inaugration.JPG",
        "/orangehub/group.JPG",
        "/orangehub/mind_over_miles_bg.jpg",
        "/orangehub/poster.JPG",
      ]
    }
  ];

  const currentEvent = events[0];
  const totalImages = currentEvent.images.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const autoPlayTimer = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const minSwipeDistance = 40; 

  // Smooth Auto-Moving Timer Engine
  useEffect(() => {
    if (!isHovered) {
      autoPlayTimer.current = setInterval(() => {
        handleNext();
      }, 3500);
    }
    return () => clearInterval(autoPlayTimer.current);
  }, [isHovered, totalImages]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Robust Mobile Touch Event Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Check if swipe was mostly horizontal or vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) handleNext(); // Swiped Left
        else handlePrev();           // Swiped Right
      }
    } else {
      if (Math.abs(diffY) > minSwipeDistance) {
        if (diffY > 0) handleNext(); // Swiped Up
        else handlePrev();           // Swiped Down
      }
    }
  };

  // Desktop Mouse Drag Fallback Handlers
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    const diffX = touchStartX.current - e.clientX;
    const diffY = touchStartY.current - e.clientY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) handleNext();
        else handlePrev();
      }
    } else {
      if (Math.abs(diffY) > minSwipeDistance) {
        if (diffY > 0) handleNext();
        else handlePrev();
      }
    }
  };

  return (
    <section style={styles.section}>
      <style>{`
        .split-screen-container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          min-height: 85vh;
          align-items: center;
          gap: 60px;
        }

        /* 3D Container Box Stage */
        .immersive-3d-stage {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 24px;
          perspective: 1600px;
          background-color: #FAF7F0;
          cursor: grab;
          touch-action: none; /* Prevents whole screen scrolling conflicts while swiping cards */
        }

        .immersive-3d-stage:active {
          cursor: grabbing;
        }

        /* Tilted Card Stack */
        .scrolling-card-stack {
          position: relative;
          width: 80%;
          height: 400px;
          margin: 60px auto 0 auto;
          transform-style: preserve-3d;
          transform: rotateX(16deg) rotateY(-8deg) rotateZ(2deg);
        }

        /* Dynamic 3D Card Animation Positioning */
        .cinematic-card-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0,0,0,0.14);
          opacity: 0;
          pointer-events: none;
          transform: translateY(100px) rotateX(-45deg) translateZ(-150px) scale(0.85);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      opacity 0.65s ease;
        }

        .cinematic-card-frame.active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) rotateX(0deg) translateZ(0) scale(1);
          z-index: 2;
        }

        .cinematic-card-frame.past {
          opacity: 0;
          transform: translateY(-100px) rotateX(30deg) translateZ(100px) scale(0.9);
          z-index: 1;
        }

        .cinematic-card-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Dynamic Blurs: Optimized height so they never disrupt images on mobile */
        .edge-blur-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, #FAF7F0 20%, rgba(250, 247, 240, 0.5) 70%, transparent);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 3;
          pointer-events: none;
        }

        .edge-blur-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, #FAF7F0 20%, rgba(250, 247, 240, 0.5) 70%, transparent);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 3;
          pointer-events: none;
        }

        /* Navigation Dots */
        .asset-pagination-bar {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 4;
          background: rgba(26, 26, 26, 0.04);
          padding: 16px 10px;
          border-radius: 30px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(26, 26, 26, 0.05);
        }

        .tracker-dot-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #A69F90;
          border: none;
          padding: 0;
          cursor: pointer;
          opacity: 0.35;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tracker-dot-btn.active {
          opacity: 1;
          background-color: #D94111;
          transform: scale(1.4);
          box-shadow: 0 0 10px rgba(217, 65, 17, 0.4);
        }

        /* Segment Grid Boxes */
        .segment-card-item {
          display: flex;
          align-items: center;
          gap: 18px;
          background-color: #FFFFFF;
          border: 1px solid #E6DFCE;
          border-left: 4px solid #D94111;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(139, 30, 30, 0.02);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .segment-card-item:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(139, 30, 30, 0.06);
        }

        /* Memories Footer Caption */
        .gallery-caption-wrapper {
          position: absolute;
          bottom: 24px;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 4;
          pointer-events: none;
        }

        .gallery-caption-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 5px;
          color: #8B1E1E;
          text-transform: uppercase;
          opacity: 0.8;
          display: inline-block;
          border-bottom: 1px solid rgba(139, 30, 30, 0.2);
          padding-bottom: 4px;
        }

        /* --- Strict Media Responsive Fixes --- */
        @media (max-width: 1100px) {
          .split-screen-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .immersive-3d-stage {
            height: 500px;
          }
          .scrolling-card-stack {
            height: 340px;
            margin-top: 50px;
          }
        }

        @media (max-width: 600px) {
          .immersive-3d-stage {
            height: 420px;
          }
          .scrolling-card-stack {
            width: 82%;
            height: 260px;
            margin-top: 45px;
          }
          .edge-blur-top, .edge-blur-bottom {
            height: 50px; /* Reduced to avoid covering scaled mobile images */
          }
          .asset-pagination-bar {
            right: 12px;
            padding: 12px 8px;
            gap: 10px;
          }
          .tracker-dot-btn {
            width: 8px;
            height: 8px;
          }
          .gallery-caption-text {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }
        }
      `}</style>

      <div style={styles.container}>

        {/* Centered Brand Header */}
        <div style={styles.brandHeader}>
          <div style={styles.logoWrapper}>
            <img
              src="/orangehub/oreange-hub-logo.png"
              alt="Orange Hub Logo"
              style={styles.brandLogo}
            />
          </div>
          <h2 style={styles.brandTitle}>OUR PERFORMED EVENTS</h2>
          <p style={styles.brandSubtitle}>
            Bringing communities together through high-impact, purpose-driven moments.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="split-screen-container" style={styles.eventItemWrapper}>

          {/* Left Side: Information Architecture */}
          <div style={styles.textColumn}>
            <div style={styles.statusRow}>
              <span style={styles.statusDot}></span>
              <span style={styles.statusText}>{currentEvent.status}</span>
            </div>

            <h3 style={styles.mainHeading}>
              {currentEvent.title}
              <span style={styles.subHeading}>{currentEvent.subtitle}</span>
            </h3>

            <p style={styles.tagline}>“{currentEvent.tagline}”</p>

            <div style={styles.metaContainer}>
              <div style={styles.metaUnit}>
                <span style={styles.metaLabel}>TIMELINE</span>
                <span style={styles.metaValue}>{currentEvent.date}</span>
              </div>
              <div style={styles.metaUnit}>
                <span style={styles.metaLabel}>VENUE</span>
                <span style={styles.metaValue}>{currentEvent.venue}</span>
              </div>
            </div>

            {/* Event Segments */}
            <div style={styles.categoriesSection}>
              <span style={styles.sectionLabel}>MAIN EVENT SEGMENTS</span>
              <div style={styles.categoryStack}>
                {currentEvent.categories.map((cat, idx) => (
                  <div key={idx} className="segment-card-item">
                    <span style={styles.catIndex}>0{idx + 1}</span>
                    <div style={{ flex: 1 }}>
                      <h4 style={styles.catName}>{cat.name}</h4>
                      <p style={styles.catDesc}>{cat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Swipe & Click 3D Canvas */}
          <div
            className="immersive-3d-stage"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <div className="edge-blur-top"></div>
            <div className="edge-blur-bottom"></div>

            {/* Pagination Tracks */}
            <div className="asset-pagination-bar" onClick={(e) => e.stopPropagation()}>
              {currentEvent.images.map((_, i) => (
                <button
                  key={i}
                  className={`tracker-dot-btn ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Switch to event image ${i + 1}`}
                />
              ))}
            </div>

            {/* Render Stack */}
            <div className="scrolling-card-stack">
              {currentEvent.images.map((imgUrl, idx) => {
                let cardStateClass = "";

                if (idx === activeIndex) {
                  cardStateClass = "active";
                } else if (idx === (activeIndex - 1 + totalImages) % totalImages) {
                  cardStateClass = "past";
                }

                return (
                  <div key={idx} className={`cinematic-card-frame ${cardStateClass}`}>
                    <img
                      src={imgUrl}
                      alt={`${currentEvent.title} snapshot ${idx + 1}`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Caption Overlay */}
            <div className="gallery-caption-wrapper">
              <span className="gallery-caption-text">Our Event Memories</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#FAF7F0',
    padding: '60px 24px',
    fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
    color: '#1A1A1A',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1440px',
    margin: '0 auto',
  },
  brandHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '16px',
  },
  brandLogo: {
    height: '55px',
    objectFit: 'contain',
  },
  brandTitle: {
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '4px',
    color: '#D94111',
    margin: '0 0 10px 0',
  },
  brandSubtitle: {
    fontSize: '1.02rem',
    color: '#666258',
    maxWidth: '520px',
    margin: '0 auto',
    lineHeight: '1.5',
    fontWeight: '300',
  },
  eventItemWrapper: {
    marginBottom: '20px',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#8B1E1E',
  },
  statusText: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#8B1E1E',
  },
  mainHeading: {
    fontSize: '2.4rem',
    fontWeight: '900',
    color: '#1A1A1A',
    lineHeight: '1.1',
    margin: '0 0 14px 0',
    letterSpacing: '-1.5px',
  },
  subHeading: {
    display: 'block',
    fontSize: '1.35rem',
    fontWeight: '400',
    color: '#5C5850',
    marginTop: '6px',
    letterSpacing: '-0.5px',
  },
  tagline: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: '#D94111',
    margin: '0 0 24px 0',
    lineHeight: '1.5',
    fontWeight: '500',
  },
  metaContainer: {
    display: 'flex',
    gap: '40px',
    borderTop: '1px solid #EAE4D5',
    borderBottom: '1px solid #EAE4D5',
    padding: '18px 0',
    marginBottom: '32px',
  },
  metaUnit: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  metaLabel: {
    fontSize: '0.65rem',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#9E988A',
  },
  metaValue: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#2B2B2B',
  },
  categoriesSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionLabel: {
    fontSize: '0.72rem',
    fontWeight: '800',
    letterSpacing: '2.5px',
    color: '#8B1E1E',
    marginBottom: '16px',
  },
  categoryStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  catIndex: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: '#1A1A1A',
    fontFamily: 'monospace',
    padding: '4px 8px',
    borderRadius: '6px',
    letterSpacing: '0.5px',
  },
  catName: {
    fontSize: '1.05rem',
    fontWeight: '800',
    color: '#1A1A1A',
    margin: '0 0 4px 0',
    letterSpacing: '-0.3px',
  },
  catDesc: {
    fontSize: '0.86rem',
    color: '#5C5850',
    margin: 0,
    lineHeight: '1.45',
  }
};