import interactiveDesktop from "../assets/images/desktop/image-interactive.jpg"
import interactiveMobile from "../assets/images/mobile/image-interactive.jpg"

const contentText = () => {
  return (
    <section className="py-16" aria-labelledby="leader-heading">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col items-center gap-8 md:block md:relative">
          <div className="w-full md:w-2/3">
            <img
              src={interactiveMobile}
              alt="Person interacting with VR"
              className="w-full md:hidden"
            />
            <img
              src={interactiveDesktop}
              alt="Person interacting with VR"
              className="w-full hidden md:block"
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left md:absolute md:bottom-0 md:right-0 md:w-1/2 md:bg-white md:pt-16 md:pl-16">
            <h2 id="leader-heading" className="text-2xl md:text-4xl uppercase">
              The leader in interactive VR
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2011, Loopstudios has been producing world-class virtual
              reality projects for some of the best companies around the globe.
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contentText;
