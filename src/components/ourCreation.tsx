import React from "react";
import CreationCard from "./ui/creationCard";
import { creations } from "../data/creations";

const ourCreation = () => {
  return (
    <section className="py-16" aria-labelledby="creations-heading">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col gap-4 items-center lg:items-start w-full lg:gap-8">
          <div>
            <h2 id="creations-heading" className="text-2xl md:text-3xl uppercase">
              Our Creations
            </h2>
          </div>
          <div className="flex flex-col gap-4 w-full md:grid md:grid-cols-2 lg:grid-cols-4">
            {creations.map((creation) => (
              <CreationCard
                key={creation.id}
                desktop={creation.desktop}
                mobile={creation.mobile}
                title={creation.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourCreation;
