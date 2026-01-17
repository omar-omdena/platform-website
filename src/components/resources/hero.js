import { Icon } from "@iconify/react";
import Image from "next/image";

export function Hero() {
  const articles = [
    {
      id: 1,
      title: "AI Project Health: Instant Agentic Diagnostics",
      description:
        "Understand how Nexus continuously evaluates sprint health, code quality, test readiness, and delivery risk — without manual reporting or status meetings.",
      date: "Jan 24, 2026",
      featuredImage: "/images/resources/featured-image-1.png",
      category: "Project Health",
    },
    {
      id: 2,
      title: "Managing the Agentic Backlog: Smarter Project Orchestration",
      description:
        "See how Nexus structures AI work using intelligent backlog orchestration, sprint rules, and embedded governance signals.",
      date: "Jan 24, 2026",
      featuredImage: "/images/resources/featured-image-2.png",
      category: "Workflows",
    },
  ];
  return (
    <section className="bg-background-soft bg-[url(/images/resources/pattern-1.svg)] bg-no-repeat bg-center">
      <div className="px-3 container mx-auto flex flex-col items-center  py-12 sm:py-24">
        <h1 className="mb-8 text-text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:leading-10 lg:leading-14 w-fit max-w-200">
          Resources for Operating AI Teams with Confidence
        </h1>
        <p className="mb-16 text-lg text-text-primary font-medium max-w-137.5 text-center">
          Practical insights on project health, workflows, and intelligent
          governance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="bg-background-soft max-w-[355.5px] border border-border-subtle rounded-lg overflow-hidden">
      <div className="relative w-full h-[200px] bg-gray-500">
        <Image src={article.featuredImage} fill alt="asd" />
      </div>
      <div className="p-4 h-[calc(100%-200px)] flex flex-col justify-between ">
        <div>
          <span className="inline-block py-1 px-6 bg-background-muted rounded-full text-xs font-medium text-primary mb-4">
            {article.category}
          </span>
          <h3 className="text-text-primary text-xl font-semibold mb-2">
            {article.title}
          </h3>
          <span className="inline-block mb-2">{article.date}</span>
          <p className="text-text-secondary text-sm font-medium mb-4">
            {article.description}
          </p>
        </div>

        <button className="w-fit flex gap-2 items-center cursor-pointer py-2 px-4 rounded-lg duration-200 hover:bg-background-muted ">
          <span className="text-primary font-bold">Read the Insight</span>
          <Icon
            icon="solar:arrow-right-linear"
            width={20}
            className="text-primary font-bold"
          />
        </button>
      </div>
    </div>
  );
}
