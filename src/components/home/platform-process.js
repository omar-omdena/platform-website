import Image from "next/image";

export function PlatformProcess() {
  const steps = [
    {
      title: "Project Setup & Context Definition",
      description:
        "Define project charter, goals, tech stack, and standards. Connect GitHub and key resources.",
    },
    {
      title: "Team Onboarding & Access Control",
      description:
        "Invite team members, assign roles, and configure permissions",
    },
    {
      title: "Sprint Execution & AI-Guided Delivery",
      description:
        "Plan sprints, assign tickets, submit code, and receive AI-powered validation.",
    },
    {
      title: "Monitoring, Reporting & Continuous Improvement",
      description:
        "Track bugs, analyze AI scores, detect risks, and generate automated sprint review reports",
    },
  ];

  return (
    <section className="relative section bg-background-soft bg-[url(/images/homepage/pattern-3.svg)] bg-no-repeat bg-top-right">
      <dive className="absolute w-full h-full left-0 top-0 bg-[url(/images/homepage/pattern-4.svg)] bg-no-repeat bg-bottom-left"></dive>
      <div className="px-3 container mx-auto py-20">
        <div className="text-center">
          <h2 className="section-title text-text-primary">The Umaku Process</h2>
          <p className="section-description">
            How we help you build better software, step by step.
          </p>
        </div>
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          <div className={`flex flex-col gap-[50px] flex-1`}>
            {steps.map((step, index, arr) => (
              <div key={index} className={`flex gap-10 items-stretch`}>
                <div
                  className={`relative z-10 ${
                    index != arr.length - 1
                      ? `before:absolute before:w-0.5 before:h-[calc(100%+50px)] before:bg-primary before:left-4.5`
                      : ""
                  }`}
                >
                  <span className="relative z-10 h-9 w-9 rounded-full bg-[#E1E6FB] inline-flex justify-center items-center text-text-primary text-lg font-medium">
                    {index + 1}
                  </span>
                </div>
                <div className="shrink">
                  <h4 className="text-text-primary font-medium text-xl mb-1">
                    {step.title}
                  </h4>
                  <p className="font-normal text-text-secondary text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/images/homepage/platform-process-2.png"
              alt="Kanban board"
              width={620}
              height={100}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
