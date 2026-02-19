import { useState, useEffect, useRef } from "react";

const Banner = () => {
  const visibleCount = 3;

  const banners = [
    "Banner 1",
    "Banner 2",
    "Banner 3",
    "Banner 4",
    "Banner 5",
    "Banner 6",
  ];

  // Clone slides for infinite effect
  const extended = [
    ...banners.slice(-visibleCount),
    ...banners,
    ...banners.slice(0, visibleCount),
  ];

  const [index, setIndex] = useState(visibleCount);
  const [transition, setTransition] = useState(true);

  const slideWidth = 100 / visibleCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite reset
  useEffect(() => {
    if (index === banners.length + visibleCount) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCount);
      }, 600);
    }
  }, [index, banners.length, visibleCount]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => {
        setTransition(true);
      }, 50);
    }
  }, [transition]);

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * slideWidth}%)`,
            transition: transition ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {extended.map((banner, i) => (
            <div className="carousel-item" key={i}>
              <div className="banner-box">{banner}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .carousel {
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
        }

        .carousel-item {
          flex: 0 0 33.3333%;
          padding: 10px;
          box-sizing: border-box;
        }

        .banner-box {
          height: 200px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Banner;
