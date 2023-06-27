import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { StyleSheetManager } from 'styled-components';
import './style/index.scss';
// import './style/mixin.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// Swiper.use([Swiper, SwiperSlide]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}> */}
      <App />
    {/* </StyleSheetManager> */}
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
