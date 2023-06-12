"use client";
import { gsap } from "gsap";
import { useState } from "react";



export default function Home() {

  const [buttonToggle, setButtonToggle] = useState(true)

  const toggle = () => {
if(buttonToggle){
  gsap.to(".animationToggle",{
    x:100
  })
  gsap.to(".bg-toggle",{
    border: "1px solid white"
  })

  gsap.to("body", {
    background: "transparent"
  });
  gsap.to("body", {
    background: "black"
  });

}else{
  gsap.to(".animationToggle", {
    x: 0
  });
  gsap.to(".bg-toggle", {
    border: ""
  });
  gsap.to("body", {
    background: ""
  });
}
setButtonToggle(!buttonToggle)
  }

  return (
    <>
      <header className="max-lg:hidden">
        <nav className="w-full h-36 flex justify-center items-center">
          <div className="rounded-full bg-gray-700/10 flex gap-14 items-center">
            <ul className="flex gap-10 p-7">
              <li className="text-white/40 hover:text-white cursor-pointer">
                Features
              </li>
              <li className="text-white/40 hover:text-white cursor-pointer">
                Customers
              </li>
              <li className="text-white/40 hover:text-white cursor-pointer">
                Integratios
              </li>
              <li className="text-white/40 hover:text-white cursor-pointer">
                Pricing
              </li>
            </ul>
            <button className="bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] rounded-full w-auto flex gap-3 items-center justify-center mr-7 py-3 px-7">
              <p>Sing up</p>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
              >
                <path
                  d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main className="flex justify-center items-center w-full h-auto max-lg:hidden">
        <section>
          <h1 className="text-9xl font-medium text-center xl:py-24 lg:py-16">
            It’s time to make <br />
            <span className="flex justify-center gap-5">
             
              <p>the </p>
              <div className="h-28 w-60 bg-gradient-to-r from-black/40 to-transparent flex items-center rounded-full bg-toggle">
                <div className="w-24 h-24 rounded-full bg-white mx-5 cursor-pointer animationToggle" onClick={toggle}></div>
              </div>
              <p>switch</p>
            </span>
          </h1>
          <p className="text-2xl text-center">
            Enhance your experience with a wide variety of add-ons and
            integrations.<br/> From essentials to powerful workflows.
          </p>
        </section>
      </main>
      <p className="hidden max-lg:block text-5xl text-center text-white uppercase">This page is not designed for mobile devices.</p>
      <footer className="overflow-x-hidden absolute bottom-0 w-full flex justify-center max-lg:hidden">
        <img src="/images/footer.png" alt="footer" className="w-full" />
      </footer>
    </>
  );
}
