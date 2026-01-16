import { Icon } from "@iconify/react";

export function WhyTeamsChoosePlatform() {
  const items = [
    { icon: "si:ai-fill", text: "Built for AI Products" },
    { icon: "material-symbols:radar", text: "Context-First Intelligence" },
    { icon: "solar:shield-check-outline", text: "Embedded Governance" },
    {
      icon: "material-symbols:trending-up-rounded",
      text: "Data-Driven Leadership",
    },
    {
      icon: "tabler:layout-grid",
      text: "One Unified System",
    },
  ];

  return (
    <section className="section bg-primary">
      <div className="px-3 container mx-auto">
        <h2 className="section-title text-center text-white">
          Why Teams Choose Umaku
        </h2>
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#3C64DF] pb-5 pl-5 pr-5 rounded-lg w-full max-w-87.5 sm:max-w-none mx-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-background-soft flex justify-center items-center mx-auto mb-3">
                <Icon icon={item.icon} width={30} className="text-primary" />
              </div>
              <h5 className="max-w-48 mx-auto text-center font-medium text-white">
                {item.text}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
