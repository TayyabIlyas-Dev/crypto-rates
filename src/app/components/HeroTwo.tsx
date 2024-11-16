import React from "react";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { SiPolygon } from "react-icons/si";
import { TbBrandAirbnb } from "react-icons/tb";
import { SiDogecoin } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { RiXrpLine } from "react-icons/ri";
import { SiEthereum } from "react-icons/si";
import { SiCardano } from "react-icons/si";

interface Token {
  name: string;
  price: string;
  change: string;
  icon: React.ReactNode;
  isPositive: boolean;
}

const tokens: Token[] = [
  { name: "BITCOIN", price: "$90,667.00", change: "5.36%", icon: <PiCurrencyBtcFill/>, isPositive: true },
  { name: "POLYGON", price: "$4,170.00", change: "5.36%", icon: <SiPolygon/>, isPositive: true },
  { name: "BINANCE", price: "$0.0036", change: "-5.36%", icon: <TbBrandAirbnb/>, isPositive: false },
  { name: "DOGE", price: "$52.47", change: "5.36%", icon: <SiDogecoin/>, isPositive: true },
  { name: "TETHER", price: "$1.00", change: "-5.36%", icon: <SiTether/>, isPositive: false },
  { name: "XRP", price: "$0.0036", change: "5.36%", icon: <RiXrpLine/> , isPositive: true },
  { name: "ETHERUM", price: "$3,146.50", change: "5.36%", icon: <SiEthereum/>, isPositive: true },
  { name: "CARDANO", price: "$0.71", change: "5.36%", icon: <SiCardano/>, isPositive: true },
];

const HeroTwo: React.FC = () => {
  return (
   <div className="py-2">
     <section className="bg-[#36322e] text-white  rounded-lg m-2 py-10 px-5">
 <h1 className=" text-[#e09800] py-3 text-3xl sm:text-5xl sm:px-12 font-black sm:font-bold sm:roboto text-center">
 Exchangeable Tokens
            </h1>     
             <p className="text-sm sm:text-lg text-[#fefaefb0] mb-8 text-center py-3">Most top rated Cryptocurrency you can see here</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 sm:px-10">
        {tokens.map((token) => (
          <div
            key={token.name}
            className="bg-[#6d624a38] shadow-md p-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-[#e09800]">{token.icon}</span>
              <div>
                <h3 className="font-semibold">{token.name}</h3>
                <p className="text-sm">{token.price}</p>
              </div>
            </div>
            <p
              className={`text-sm font-semibold ${
                token.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {token.isPositive ? "▲" : "▼"} {token.change}
            </p>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
};

export default HeroTwo;
