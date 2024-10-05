"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  return (
    <div className={"h-screen w-screen"} ref={ref}>
      {/* line animation */}
      <div aria-hidden />
      <h1>Github Page</h1>
    </div>
  );
};

const GithubPage = () => {
  return (
    <main>
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
    </main>
  );
};

export default GithubPage;
