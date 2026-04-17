import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

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
   <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        mt: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${index * slideWidth}%)`,
          transition: transition
            ? "transform 0.6s ease-in-out"
            : "none",
        }}
      >
        {extended.map((banner, i) => (
          <Box
            key={i}
            sx={{
              flex: `0 0 ${100 / visibleCount}%`,
              p: 1.5,
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                height: 200,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background:
                  "linear-gradient(135deg, #6366F1, #06B6D4)",

                color: "#fff",
                fontSize: 22,
                fontWeight: 600,

                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                transition: "all 0.4s ease",

                position: "relative",
                overflow: "hidden",

                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-75%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
                  transform: "skewX(-25deg)",
                },

                "&:hover::before": {
                  left: "130%",
                  transition: "0.7s",
                },
              }}
            >
              <Typography
                sx={{
                  zIndex: 2,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                }}
              >
                {banner}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Banner;
