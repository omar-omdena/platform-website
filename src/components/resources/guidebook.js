import { Icon } from "@iconify/react";
import Image from "next/image";
import Button from "@/components/ui/button";

export function GuideBook() {
  const items = [
    "Board view & sprint governance",
    "Roadmap & delivery planning",
    "Backlog orchestration",
    "Team & contribution analytics",
    "Governance signals and visibility model",
  ];
  return (
    <section className="bg-background-soft bg-[url(/images/resources/pattern-2.svg)] bg-no-repeat bg-top-left">
      <div className="container mx-auto px-3 py-16">
        <div>
          <div className="text-center mb-8">
            <h2 className="section-title">Umaku Guidebook</h2>
            <p className="section-description">
              A practical walkthrough of how Umaku governs AI development — end
              to end.
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row rounded-xl overflow-hidden">
            <div className="p-6 bg-[#F9FAFB] md:w-1/2 md:py-20 md:pl-16">
              <h3 className="text-text-primary text-xl md:text-2xl  lg:text-3xl font-semibold mb-4">
                Understanding the Umaku Platform
              </h3>
              <p className="text-text-secondary text-base mb-8">
                A structured guide to how Umaku supports AI teams through
                intelligent governance — covering boards, roadmaps, backlogs,
                analytics, and development oversight.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {items.map((item) => (
                  <li className="flex items-start gap-2">
                    <span>
                      <Icon
                        icon="mdi:check-circle"
                        width={18}
                        className="text-primary"
                      />
                    </span>
                    <span className="text-text-primary text-base -mt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                type="primary-fill"
                text="Read the Platform Guide"
                icon="solar:arrow-right-linear"
                size={2}
                to="/sign-up"
                right
              />
            </div>
            <div className="p-6 bg-background-muted">
              <Image
                src="/images/resources/software-guide-placeholder.png"
                alt="asd"
                width={600}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
