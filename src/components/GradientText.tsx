const GradientText = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center p-24 gap-3">
      {/* bg gradient */}
      <span
        className={
          "bg-gradient-to-r from-[#e9f9f4] via-[#cfebfe] via-[45%] to-[#f2eefe] px-2 text-5xl font-bold"
        }
      >
        from hello world to IPO.
      </span>

      {/* before prefix */}
      <span
        className={
          "before:block before:-inset-0 relative before:absolute before:bg-gradient-to-r before:from-[#e9f9f4] before:via-[#cfebfe] before:via-[45%] before:to-[#f2eefe] text-5xl font-bold"
        }
      >
        <span className={"relative"}>from hello world to IPO.</span>
      </span>

      <span className="bg-gradient-to-r from-[#15c064] from-[28.5%] to-[#00d1ff] to-[91.82%] bg-clip-text text-9xl font-bold text-transparent leading-[1.1] px-1">
        Shopify
      </span>
    </div>
  );
};

export default GradientText;
