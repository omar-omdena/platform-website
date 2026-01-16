export function WhyTeamsChoosePlatform() {
  const items = [
    {
      title: "Built for AI Products",
      description:
        "Designed to help teams turn AI experiments into production-ready systems — with structure, governance, and traceability.",
    },
    {
      title: "Context-First Intelligence",
      description:
        "Every insight is grounded in project intent, code, tickets, and business requirements — not generic rules.",
    },
    {
      title: "Embedded Governance",
      description:
        "Quality gates, standards, and validations are built directly into your workflow — with full managerial control.",
    },
    {
      title: "Data-Driven Leadership",
      description:
        "Sprint performance, risks, and quality trends are backed by real data — not assumptions.",
    },
    {
      title: "One Unified System",
      description:
        "Planning, code, AI reviews, reports, and collaboration — all in one connected platform.",
    },
  ];

  return (
    <section className="section bg-primary">
      <div className="container px-3 mx-auto">
        <div>
          <h2 className="section-title text-white">Why Teams Choose Umaku</h2>
          <div className="h-fit grid grid-cols-1 mt-12 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((item) => (
              <div className="border-l-4 border-primary-soft rounded-sm pl-3">
                <h3 className="text-white mb-2 font-bold text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
