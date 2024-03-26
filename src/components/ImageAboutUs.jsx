import { useEffect } from "react";
import gsap from "gsap";

function ImageAboutUs({ data }) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(
      `#a`,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    tl.fromTo(
      `#b`,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    tl.fromTo(
      `#c`,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    tl.fromTo(
      `#d`,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    tl.fromTo(
      `#e`,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    );
  }, [data.id]); // Add data.id as a dependency to re-run the effect when the ID changes

  return (
    <li
      id={`${data.class}`}
      className="text-center flex flex-col items-center "
    >
      <img
        className="rounded-md w-44 h-60"
        src={data.image}
        alt={`image/${data.name}`}
      />
      <span className="text-lg">{data.name}</span>
      <span className="text-slate-500 text-base">{data.job}</span>
    </li>
  );
}

export default ImageAboutUs;
