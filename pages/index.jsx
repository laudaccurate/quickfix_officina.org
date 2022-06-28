import Services from "../components/Services";
import { HeroImageBackground } from "../components/Hero";
import Banner from "../components/Banner";
import { Title } from "@mantine/core";
import { ContactUs } from "../components/Contact";

export default function Home() {
  return (
    <div className="mx-auto lg:w-3/5 w-full">
      <div id="home">
        <HeroImageBackground />
      </div>
      <div id="works">
        <Services />
      </div>
      <div className="py-10 px-5 bg-white mx-auto text-center">
        <Title className="mb-5">Who We Are ....</Title>
        <Banner />
      </div>
      <div id="contact">
        <Title className="my-5 text-center">Do Business With Us</Title>
        <ContactUs />
      </div>
    </div>
  );
}

