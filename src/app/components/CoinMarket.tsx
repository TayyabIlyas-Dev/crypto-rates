'use client'
import React, { useState, useEffect } from 'react';

interface CoinData {
  rates: {
    [key: string]: number;
  };
}

const CoinMarket = () => {
  const API_CHABI = '01421f3dea19b56fd99793c3afca5f75';
  const [data, setData] = useState<CoinData | null>(null);
  const [coin1, setCoin1] = useState('BTC'); // Default coin 1
  const [coin2, setCoin2] = useState('ETH'); // Default coin 2

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_CHABI}`)
      .then((response) => response.json())
      .then((json_converted) => {
        setData(json_converted);
        console.log('Fetched data:', json_converted);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {/* Coin Rates section */}
      <div className="py-4">
        <div className="grid grid-cols-2 h-full overflow-hidden bg-[#faf2e4] w-full max-w-[900px] rounded-xl mx-auto">
          
          {/* Coin 1 */}
          <div className="1stCol">
            {/* Coin Selection */}
            <input
              type="text"
              value={coin1}
              onChange={(e) => setCoin1(e.target.value.toUpperCase())}
              className="text-center mb-2 bg-gray-200 rounded"
              placeholder="Enter coin (e.g., BTC)"
            />
            <div className="radiusMBR sm:radiusBR px-6 bg-[#49423b] sm:px-20 py-6 flex flex-col justify-center items-center borderLeftNone borderTopNone border-[1px] border-white">
              <div>{coin1}</div>
              <div>{data && data.rates && data.rates[coin1] ? `$${data.rates[coin1]}` : 'Loading...'}</div>
            </div>
          </div>

          {/* Coin 2 */}
          <div className="2ndCol">
            {/* Coin Selection */}
            <input
              type="text"
              value={coin2}
              onChange={(e) => setCoin2(e.target.value.toUpperCase())}
              className="text-center mb-2 bg-gray-200 rounded"
              placeholder="Enter coin (e.g., ETH)"
            />
            <div className="radiusMBL sm:radiusBL px-6 bg-[#49423b] sm:px-20 py-6 flex flex-col justify-center items-center borderRightNone borderTopNone border-[1px] border-white">
              <div>{coin2}</div>
              <div>{data && data.rates && data.rates[coin2] ? `$${data.rates[coin2]}` : 'Loading...'}</div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CoinMarket;
