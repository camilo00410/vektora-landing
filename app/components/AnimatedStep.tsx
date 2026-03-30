"use client";

import { useInView } from "../hooks/useInView";

interface StepProps {
  step: string;
  title: string;
  desc: string;
  index: number;
}

export function AnimatedStep({ step, title, desc, index }: StepProps) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`text-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p
        style={{ color: "#6C63FF" }}
        className="text-5xl font-extrabold mb-4 opacity-40"
      >
        {step}
      </p>
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </article>
  );
}
