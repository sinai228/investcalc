import React, { useEffect } from 'react';
import '../App.css'

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script'); 
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
            proName: "FX_IDC:KRWUSD",
            title: "KRW/USD",
        },
        {
            proName: "FX_IDC:CNYUSD",
            title: "CNY/USD",
        },
        {
            proName: "NASDAQ:AAPL",
            title: "Apple",
        },
        {
            proName: "NASDAQ:NVDA",
            title: "Nvidia",
        },
        {
            proName: "NASDAQ:AMZN",
            title: "Amazon",
        },
        {
            proName: "NASDAQ:MSFT",
            title: "Microsoft",
        },
        {
            proName: "NASDAQ:GOOGL",
            title: "Google",
        }, 
        {
            proName: "NASDAQ:TSLA",
            title: "Teska",
        }, 
        {
            proName: "FX_IDC:CNYUSD",
            title: "CNY/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "in",
    //   continue: "true"
    });

    const container = document.getElementById('tradingview-widget-container');
    container?.appendChild(script); 

    // Cleanup function to remove old script on unmount
    return () => {
        if (container) {
            container.innerHTML = ''; // Remove previous widget
        }
        };
  }, []);

  return (
    <div id="tradingview-widget-container"> 
    </div>
    // <TradingViewWidget/>
  );
};

 export default TradingViewWidget;
