import { Icon } from "@iconify/react";
import Image from "next/image";
import Button from "@/components/ui/button";

export function Hero() {
  const items = [
    "Bridge the gap between notebooks and production systems",
    "Analyze code consistency with business requirements",
    "Review code and surface improvement signals",
    "Track delivery readiness in real time",
    "Monitor development progress across teams",
    "Continuously assess quality and risk",
  ];
  // bg-[url(/images/homepage/hero-pattern.png)]
  return (
    <section className="bg-background-soft bg-[url(/images/homepage/pattern-1.svg)] bg-no-repeat bg-center">
      <div className="px-3 container mx-auto flex gap-10 py-16">
        <div className="lg:w-[42%]">
          <h1 className="mb-5 font-bold text-text-primary text-3xl sm:text-4xl md:text-5xl leading-10 sm:leading12 md:leading-14">
            <span className="block">One Platform</span>
            Mastered for AI Product Development
          </h1>
          <div className="text-base sm:text-lg text-text-primary">
            <p className="mb-2 ">
              Unlike generic project management tools, Umaku is purpose-built
              for AI teams to —
            </p>
            <ul className="pl-4 font-normal">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 mb-2.5">
                  <Icon
                    icon="mdi:check-circle"
                    width={20}
                    className="text-success"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 duration-100 font-medium mt-10">
              <Button
                type="primary-fill"
                text="Read the Guide"
                size={3}
                to="/guide"
                className="px-12"
              />
              <Button
                type="secondary-outline"
                text="Explore the Platform"
                size={3}
                to="/sign-up"
                icon="solar:arrow-right-linear"
                right
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
          <div>
            <Image
              src="/images/homepage/hero.png"
              alt="Kanban board"
              width={700}
              height={10}
              // className="rounded-2xl p-5 bg-[#d5c7d2]"
              // className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
