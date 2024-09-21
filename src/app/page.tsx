import GradientIcon from "@/components/GradientIcon";
import GradientText from "@/components/GradientText";
import AnimatedAnchor from "@/components/AnimatedAnchor";
import AnimatedSlideAnchor from "@/components/AnimatedSlideAnchor";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <GradientIcon />
      <GradientText />
      <AnimatedAnchor />
      <AnimatedSlideAnchor />
    </main>
  );
}
