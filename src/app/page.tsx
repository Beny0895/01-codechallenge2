"use client"

import AboutUs from "./about-us/page";
import Programs from "./programs/page";
import OurTeams from "./our-teams/page";

export default function Home() {
  return (
    <>
    <div>
      
      <div className="pt-32 pb-10 bg-black ">
        <h1 className="text-white text-center
        text-7xl font-serif font-bold">Unlimited Creativity with GoldenState</h1>
      </div>
      <div className="pt-15 pb-10 bg-black text-white">
        <p className="text-center text-3xl font-serif">Get high-quality digital solutions</p>
        <p className="text-center text-3xl font-serif">with our extensive experienced team</p>
        <p className="text-center text-3xl font-serif">we help to achieve success in the digital era</p>
        <div className="pt-20 ">
          <div className="pl-96 font-serif flex items-center pr-96">
           <button className="text-white hover:text-black bg-green-500 hover:bg-green-300 text-3xl font-serif rounded-lg p-2"><a href="/programs">Start Project</a></button>
          </div>
        </div>
      </div>
                <div className="flex items-center bg-black">
                 <img className="w-full rounded-3xl" src="https://akcdn.detik.net.id/visual/2020/12/04/ilustrasi-teman-kantor_169.jpeg?w=650"/>
                </div>
      <div className="pt-20 pb-20">
        <Programs/>
      </div>
      <div className="pt-20 pb-20">
        <AboutUs/>
      </div>
      <div className="pt-20 pb-20">
        <OurTeams/>
      </div>   
    </div>
    </>
  );
}
