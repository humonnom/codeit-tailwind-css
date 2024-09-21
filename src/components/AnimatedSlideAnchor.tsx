function AnimatedSlideAnchor() {
  return (
    <div className="w-80">
      <a
        href="/sell"
        className="text-lg border-b pb-4 font-medium flex flex-row border-black"
      >
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="h-6 w-6"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="font-semibold">Start selling</span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="ml-auto h-6 w-6"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default AnimatedSlideAnchor;
