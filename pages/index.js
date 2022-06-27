import Services from "../components/Features";
import { HeroImageBackground } from "../components/Hero";

export default function Home() {
  return (
    <div className="mx-auto lg:w-3/5 w-full">
      <div id="home">
        <HeroImageBackground />
      </div>
      <div id="works">
        <Services />
      </div>
    </div>
  );
}

