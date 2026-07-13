import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import OurCreation from "./components/ourCreation";
import ContentText from "./components/contentText";

const App = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <Hero />
      </div>
      <main>
        <ContentText />
        <OurCreation />
      </main>
      <Footer />
    </>
  );
};

export default App;
