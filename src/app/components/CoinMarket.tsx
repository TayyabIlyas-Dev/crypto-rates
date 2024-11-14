'use client'
import React, { useState, useEffect } from 'react';

interface CoinData {
  rates: {
    [key: string]: number;
  };
}

const CoinMarket = () => {
  const API_CHABI = '9c45c95bc4dbf5507442177061d8abeb';
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
            <div className=' flex justify-center radiusMBR sm:radiusBL  py-2 bg-[#49423b]  borderLeftNone  borderRightNone borderTopNone border-[1px]'>

            <input
              type="text"
              value={coin1}
              onChange={(e) => setCoin1(e.target.value.toUpperCase())}
              className=" text-center flex items-center w-[50%]  bg-[#49423b] font-medium text-[#e09800]"
              placeholder="Enter coin (e.g., BTC)"
            />
            </div>
            <div className="radiusMTR sm:radiusTR h-full  px-6 bg-[#49423b] sm:px-20 py-6 flex flex-col items-center borderBottomNone  borderLeftNone borderTopNone border-[1px] border-white">
              <div>{coin1}</div>
              <div className='text-[#e09800]'>{data && data.rates && data.rates[coin1] ? `$${data.rates[coin1]}` : 'Loading...'}</div>
            </div>
          </div>

          {/* Coin 2 */}
          <div className="2ndCol ">
            {/* Coin Selection */}
          
          <div className='radiusMBL sm:radiusBL  flex justify-center py-2 bg-[#49423b] borderRightNone borderTopNone border-[1px]'>
          <input
              type="text"
              value={coin2}
              onChange={(e) => setCoin2(e.target.value.toUpperCase())}
              className="text-center flex items-center w-[50%]  bg-[#49423b] font-medium text-[#e09800]"
              placeholder="Enter coin (e.g., ETH)"
            />
          </div>

            <div className="radiusMTL sm:radiusBL px-6 bg-[#49423b] sm:px-20 py-6 flex flex-col justify-center items-center borderBottomNone  borderRightNone borderTopNone border-[1px] border-white">
              <div>{coin2}</div>
              <div className='text-[#e09800]'>{data && data.rates && data.rates[coin2] ? `$${data.rates[coin2]}` : 'Loading...'}</div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CoinMarket;
