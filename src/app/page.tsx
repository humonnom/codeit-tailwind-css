"use client";
// import GradientIcon from "@/components/GradientIcon";
// import GradientText from "@/components/GradientText";
// import AnimatedAnchor from "@/components/AnimatedAnchor";
// import AnimatedSlideAnchor from "@/components/AnimatedSlideAnchor";
import CustomSelector from "@/components/CustomSelector";

const items = {
  ALL: "모든 타입",
  LEGACY: "Legacy",
  V1: "Version 1",
  V2: "Version 2",
  V3: "Version 3",
};
const selectItems = Object.entries(items).map(([key, value]) => ({
  key,
  label: value,
}));

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {/*<GradientIcon />*/}
      {/*<GradientText />*/}
      {/*<AnimatedAnchor />*/}
      {/*<AnimatedSlideAnchor />*/}
      <CustomSelector
        items={selectItems}
        onSelect={() => {}}
        initialItem={selectItems[0]}
      />
    </main>
  );
}
