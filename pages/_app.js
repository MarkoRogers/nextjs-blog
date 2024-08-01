import '../styles/global.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
