'use client';
import AppContext from './TimerContext.js';
import './index.css';

const RootLayout = ({ children }) =>{
  return (
    <html lang="en">
	  <head>
	  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

	  <meta name="viewport" content="initial-scale=1, width=device-width" />
	  </head>
      	  <body >
	  <AppContext>
	  {children}
	  </AppContext>
	  </body>
    </html>
  )
}
export default RootLayout;
