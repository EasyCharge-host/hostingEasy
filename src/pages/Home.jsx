import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger separately
import Footer from "../components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Animation for the initial appearance of elements

    gsap.fromTo(
      ".text",
      { opacity: 0.5, y: -100 },
      { duration: 1, opacity: 1, y: 0 },
    );
    gsap.fromTo(
      ".img",
      { duration: 1, opacity: 0.5, scale: 1, y: 100 },
      { opacity: 1, scale: 1, y: 0 },
    );

    // Animation triggered when ".textWieso" enters the viewport
    gsap.fromTo(
      ".textWieso",
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".textWieso",
          start: "top 80%", // Adjusted the start value to trigger animation closer to the bottom          toggleActions: "play none none none", // play animation once when triggered
        },
      },
    );
  }, []);

  return (
    <>
      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        {/*Section 1 ; Wer wir sind und wie wir dazu gekommen sind */}
        <section className="text md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>HEY,</b> wir sind eine Junior Company namens EasyCharge infolge
          unsere Ausbildungen bekommen wir eine einzigartige Chance. Unsere
          Kenntnisse zu erweitern und gelerntes Wissen einzusetzen.
        </section>
        <div className="img  md:w-1/3 mt-4 md:mt-0 overflow-auto">
          {/* Image container */}
          <img
            src="/80c6b5b3-4713-4b02-a80f-0130664c74af.JPG"
            alt="Bild"
            className="w-full h-auto "
          />
        </div>

        {/*Section 2 ; Unser Produkt was enthalten ist*/}
        <section className="text md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>UNSER,</b> Projekt ist eine wiederverwendbare Tasche inkl.
          Powerbank Induktion, die hauptsächlich in größeren Taschen sowie auch
          in Rucksäcken leicht integriert werden kann.
          <br />
        </section>
      </div>

      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        {/*Section 3 ;Wieso wir EasyCharge gegründet haben */}
        <section className="textWieso md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>Wieso EasyCharge?</b> Wir haben EasyCharge gegründet, um eine
          wiederverwendbare Lösung für den täglichen Bedarf und/oder
          außerhäuslichen Aktivitäten an komfort zu bieten. In einer so
          vernetzten Welt, werden Akkus immer schneller leer, wir wollen das
          verhindern. Wieso? Einmal unterwegs beim Wandern und verlaufen? Nun
          nicht mehr . Unsere Produkte bieten Komfort, Zuverlässigkeit und
          Umweltfreundlichkeit in einem.
        </section>
        <div className="img md:w-1/2 mt-4 md:mt-0 overflow-auto">
          {/* Image container */}
          <img src="/forrest.jpg" alt="Bild" className="w-full h-auto" />
        </div>
      </div>

      <Footer className="mt-auto footer" />
    </>
  );
}

export default Home;
