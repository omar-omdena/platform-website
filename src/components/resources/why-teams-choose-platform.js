import { Icon } from "@iconify/react";
import Button from "@/components/ui/button";

export function WhyTeamsChoosePlatform() {
  const items = [
    "AI projects move from experimentation to production delivery",
    "Context gets lost across tickets, code, and documentation",
    "Leaders need visibility without slowing teams down",
    "Governance is required without heavy bureaucracy",
    "Tool sprawl starts hurting productivity",
  ];

  return (
    <section className="py-24 bg-[#FDE4D2] bg-[url(/images/resources/pattern-4.svg)] bg-no-repeat bg-top-right bg-auto">
      <div className="container mx-auto px-3">
        <div className="p-18 rounded-2xl lg:flex lg:justify-between bg-background-soft">
          <div className="lg:w-2/5">
            <h2 className="text-text-primary font-bold text-4xl mb-8">
              When Teams Turn to Umaku
            </h2>
            <Button
              type="primary-fill"
              text="See How Umaku Helps"
              className="font-semibold hidden lg:block"
            />
          </div>
          <ul className="flex flex-col  gap-4 lg:w-fit">
            {items.map((item) => (
              <li className="flex items-center gap-3">
                <div>
                  <Icon
                    icon="mdi:check-circle"
                    width={20}
                    className="text-text-primary"
                  />
                </div>
                <span className="text-text-secondary font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Button
            type="primary-fill"
            text="See How Umaku Helps"
            className="font-semibold mt-8 lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
