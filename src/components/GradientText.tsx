const GradientText = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center p-24">
      <span
        className={
          "bg-gradient-to-r from-[#e9f9f4] via-[#cfebfe] via-[45%] to-[#f2eefe] px-2 text-[46px] font-bold"
        }
      >
        from hello world to IPO.
      </span>

      <span className="bg-gradient-to-r from-[#15c064] from-[28.5%] to-[#00d1ff] to-[91.82%] bg-clip-text text-9xl font-bold text-transparent leading-[1.1] px-1">
        Shopify
      </span>
    </div>
  );
};

export default GradientText;
