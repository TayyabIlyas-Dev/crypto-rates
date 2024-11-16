import Footer from "./components/Footer";
import HeroOne from "./components/HeroOne";
import HeroThree from "./components/HeroThree";
import HeroTwo from "./components/HeroTwo";
import IconSlider from "./components/IconSlider";


export default function Home() {
  return (
   <div className="bg-[#2d2a27]">
       <div>
        <HeroOne/>
       </div>

       <div>
           <IconSlider/>
       </div>

       <div>
        <HeroTwo/>
       </div>

       <div>
        <HeroThree/>
       </div>

       <div>
        <Footer/>
       </div>
   </div>
  );
}
