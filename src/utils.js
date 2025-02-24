// src/utils.js

export const sections = ['Intro', 'Projects', 'About', 'Contact'];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const handleSmoothScroll = (section) => {
  const el = document.getElementById(section.toLowerCase());
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};