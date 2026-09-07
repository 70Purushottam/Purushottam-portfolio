import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>
        <Reveal delay={80}>
          <div className="max-w-2xl space-y-5 text-[15.5px] leading-relaxed text-text-muted">
            <p>
              I'm Purushottam Kumar, a B.Tech Electronics and Communication Engineering student at{" "}
              <span className="text-text-primary font-medium">NIT Patna</span> with a strong interest
              in software engineering, systems programming, backend development, and problem solving.
            </p>
            <p>
              I enjoy building projects that combine computer science fundamentals with practical
              engineering. My projects include a multi-threaded HTTP proxy server built from raw TCP
              sockets and POSIX threads, as well as a full-stack URL shortening platform using React,
              Node.js, and Express.
            </p>
            <p>
              I also enjoy competitive programming and have solved{" "}
              <span className="text-accent-amber font-mono font-semibold">1,000+</span> Data
              Structures and Algorithms problems across LeetCode, CodeChef, and Codeforces.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
