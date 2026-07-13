import heroMobile from "../assets/images/mobile/image-hero.jpg";
import heroDesktop from "../assets/images/desktop/image-hero.jpg";

const HeroContent = () => (
  <div className="max-w-7xl px-4 mx-auto h-full">
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col p-5 justify-center border-2 border-white lg:w-7/12">
        <h1 id="hero-heading" className="text-5xl lg:text-8xl uppercase font-light text-white">
          Immersive experiences that deliver
        </h1>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative h-dvh bg-black" aria-labelledby="hero-heading">
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="Person using virtual reality headset"
          className="w-full h-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
