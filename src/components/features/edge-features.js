import { Icon } from "@iconify/react";
import Image from "next/image";

export function EdgeFeatures() {
  const edgeFeatures = [
    {
      title: "Contract-Aware Logic Review",
      description:
        "Umaku analyzes business contracts and product requirements alongside your code to detect logical violations. The power isn’t automated code review — it’s context-aware review that ensures implementations match real product intent.",
      items: [
        "Reviews code against contracts and documented requirements",
        "Detects logical bugs, missing validations, and broken assumptions",
        "Explains why an implementation violates business context",
      ],
      whyItMatters: (
        <p>
          Most production failures happen when code technically works — but
          breaks the contract.
          <span className="block mb-1.5"></span>
          Without contextual review, these logic gaps pass code review and
          become irreversible downstream issues. Umaku catches them at the
          moment intent breaks.
        </p>
      ),
      image: "/images/features/contract-aware-review.png",
    },
    {
      title: "Automated Sprint Review Reports",
      description: (
        <p>
          Umaku automatically generates comprehensive, AI-powered sprint reports
          that give teams and leadership clear insights into progress, quality,
          and risks.
          <span className="block mb-2"></span>
          These reports are built on multiple key matrices — helping you
          understand not just what was done, but how well it was done.
        </p>
      ),
      items: [
        "Evaluates sprint performance across four core matrices.",
        "Provides actionable recommendations backed by evidence and analysis",
        "Summarizes work completed, blockers, and critical insights for leadership and the team",
      ],
      whyItMatters: (
        <p>
          Without clear visibility into sprint outcomes, teams rely on
          assumptions and incomplete data.
          <span className="block mb-1.5"></span>
          Without contextual review, these logic gaps pass code review and
          become irreversible downstream issues.
        </p>
      ),
      image: "/images/features/agents-reports.png",
    },
    {
      title: "AI Project Assistant",
      description: (
        <p>
          Every project in Umaku comes with a dedicated AI assistant that fully
          understands its context, codebase, and history.
          <span className="block mb-2"></span>
          Ask questions, explore the project, or find information — the
          assistant gives answers grounded in the project’s actual work, not
          generic responses.
        </p>
      ),
      items: [
        "Understands project goals, charter, tech stack, and documentation",
        "Answers questions directly from the project’s source code and tickets",
        "all discussions are saved and can be continued anytime",
      ],
      whyItMatters: (
        <p>
          AI projects involve complex context that’s easily lost or fragmented.
          <span className="block mb-1.5"></span> Umaku’s AI Project Assistant
          becomes your project brain, helping teams preserve knowledge, onboard
          new members faster, and make informed decisions. by real data — not
          guesswork.
        </p>
      ),
      image: "/images/features/chatbot.png",
    },
    {
      title: "AI-Powered Ticket Validation",
      description: (
        <p>
          Umaku ensures that every ticket marked as “Done” is truly complete and
          meets its requirements.
          <span className="block mb-1.5"></span>
          By analyzing submitted code, user stories, and acceptance criteria,
          the AI validates work automatically — so nothing slips through the
          cracks.
        </p>
      ),
      items: [
        "Validates commits against ticket intent and requirements",
        "Detects missing implementations, incomplete logic, or deviation from coding standards",
        "Highlights areas of risk and recommends corrective actions",
        "Ensures AI reviews are grounded in project context and GitHub-sourced code",
      ],
      whyItMatters: (
        <p>
          Tickets often appear “complete” but fail to meet business requirements
          or coding standards, leading to bugs and rework.
          <span className="block mb-1.5"></span> Umaku stops incomplete or
          misaligned work before it reaches production, saving time and ensuring
          quality across your AI projects.
        </p>
      ),
      image: "/images/features/ai-ticket-review.png",
    },
    {
      title: "AI-Powered Team Recommendations",
      description: (
        <p>
          When creating a project in Umaku, the AI assistant helps you assemble
          the optimal team.
          <span className="block mb-2"></span>
          By analyzing past contributions, proven experience, and project
          requirements, Umaku recommends the right individuals — and explains
          why each was selected.
        </p>
      ),
      items: [
        "Suggests team members based on previous project contributions and experience",
        "Matches individuals to roles and tasks aligned with project goals",
        "Provides reasoning behind each recommendation for transparency",
        "Supports distributed teams and ensures balanced workload",
      ],
      whyItMatters: (
        <p>
          Choosing the right team is critical for AI project success, but manual
          assignment is time-consuming and error-prone.
          <span className="block mb-1.5"></span> Umaku removes guesswork,
          helping you assemble teams faster, reduce risk, and maximize project
          outcomes.
        </p>
      ),
      image: "/images/features/team-recommendation.png",
    },
    {
      title: "Unified Product Development Platform",
      description: (
        <p>
          Umaku brings all aspects of AI product development into a single
          platform.
          <span className="block mb-2"></span>
          From sprint planning and tickets to code, AI reviews, and team
          communication — everything happens in one place, eliminating context
          loss and dashboard sprawl.
        </p>
      ),
      items: [
        "Plan sprints, manage backlog, and track bugs within the same system",
        "Submit code and link commits directly to tickets for AI review",
        "Collaborate across the project and on individual tickets with built-in discussion threads",
        "Access comprehensive project reports and AI insights without switching tools",
      ],
      whyItMatters: (
        <p>
          Modern AI teams waste hours jumping between tools, losing context, and
          duplicating work.
          <span className="block mb-1.5"></span>
          Umaku consolidates the entire development lifecycle, making progress
          visible, actionable, and aligned — so teams can focus on building AI
          products instead of managing tools.
        </p>
      ),
      image: "/images/features/unified-platform.png",
    },
  ];

  return (
    <section>
      {edgeFeatures.map((feature, index) => (
        <div
          className={`py-16 ${
            index % 2 === 0 ? "bg-background-soft" : "bg-background-muted"
          }`}
        >
          <div className="px-3 container mx-auto py-10">
            <div className="flex flex-col gap-32">
              <FeatureRow feature={feature} index={index} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeatureRow({ feature, index }) {
  return (
    <div
      className={`flex gap-16 ${index % 2 != 0 ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="flex-1">
        <h2 className="section-title text-text-primary">{feature.title}</h2>
        {/* This version of image is for mobile screens  */}
        <div
          className={`relative h-fit lg:hidden flex justify-center ${
            index % 2 == 0 ? "mt-18 mb-6" : "mt-6 mb-18"
          }`}
        >
          <Image
            src={
              index % 2 === 0
                ? "/images/features/pattern-2.png"
                : "/images/features/pattern-2-reverted.png"
            }
            width={550}
            height={400}
            alt="asd"
            className="rounded-4xl"
          />
          <div
            className={`max-w-[90%] absolute p-6 bg-white border border-border-subtle rounded-4xl ${
              index % 2 == 0 ? "bottom-6" : "top-6"
            }`}
          >
            <Image
              src={feature.image}
              width={450}
              height={200}
              alt="asd"
              className="z-10"
            />
          </div>
        </div>
        <p className="text-base text-text-secondary mb-5">
          {feature.description}
        </p>
        <ul className="flex flex-col gap-3 mb-10">
          {feature.items.map((item) => (
            <li key={item} className="flex gap-2 items-start">
              <span>
                <Icon
                  icon="mdi:check-circle"
                  width={19}
                  className="text-success"
                />
              </span>
              <span className="text-base text-text-primary -mt-0.5">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="px-6 py-4 max-w-[500px] border-l-[3px] border-primary bg-[linear-gradient(90deg,rgba(79,70,229,0.05)_0%,rgba(79,70,229,0)_100%)]">
          <h5 className="uppercase text-primary font-bold text-sm mb-3">
            Why it Matters
          </h5>
          <p className="text-sm font-medium text-text-primary">
            {feature.whyItMatters}
          </p>
        </div>
      </div>
      <div className="relative h-fit hidden lg:flex justify-center my-auto">
        <Image
          src={
            index % 2 === 0
              ? "/images/features/pattern-2.png"
              : "/images/features/pattern-2-reverted.png"
          }
          width={550}
          height={400}
          alt="asd"
          className="rounded-4xl"
        />
        <div
          className={`w-11/12 absolute p-6 bg-white border border-border-subtle rounded-4xl ${
            index % 2 == 0 ? "bottom-6" : "top-6"
          }`}
        >
          <Image
            src={feature.image}
            width={450}
            height={200}
            alt="asd"
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
}
