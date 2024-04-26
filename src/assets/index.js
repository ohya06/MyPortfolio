import logoblack from "./logoblack.svg";
import logo1 from "./logotransp.svg";
import logo2 from "./logotransp2.svg";
import logo3 from "./logo3.svg";

import engineer from "./engineer.png";
import fullstack from "./fullstack.png";
import uiux from "./uiux.png";
import ai from "./ai.png";


import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

import css from "./languages/css.png";
import docker from "./languages/docker.png";
import figma from "./languages/figma.png";
import git from "./languages/git.png";
import html from "./languages/html.png";
import javascript from "./languages/javascript.png";
import mongodb from "./languages/mongodb.png";
import nodejs from "./languages/nodejs.png";
import reactjs from "./languages/reactjs.png";
import redux from "./languages/redux.png";
import tailwind from "./languages/tailwind.png";
import typescript from "./languages/typescript.png";
import threejs from "./languages/threejs.svg";
import cplusplus from "./languages/c++.png"
import matlab from "./languages/matlab.png"

import enlight from "./company/enlight.png";
import legaci from "./company/legaci.png";
import newEagle from "./company/newEagle.png";

// import meta from "./company/meta.png";
// import shopify from "./company/shopify.png";
// import starbucks from "./company/starbucks.png";
// import tesla from "./company/tesla.png";

import portfolio from "./portfolio.png"
import bayes from "./bayes.png"
import pinect from "./pinect.png"

import carrent from "./carrent.png";
import jobit from "./jobit.png";
import tripguide from "./tripguide.png";

// Function to set the favicon dynamically
function setFavicon(favicon) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = favicon;
  document.head.appendChild(link);
}

// Call the function with logo3
setFavicon(logo3);

export {
  logoblack,
  logo1,
  logo2,
  logo3,
  enlight,
  legaci,
  newEagle,
  engineer,
  fullstack,
  uiux,
  ai,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  cplusplus,
  matlab,
  bayes,
  portfolio,
  pinect,
  carrent,
  jobit,
  tripguide,
};
