"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

export function FAQs() {
  const faqs = [
    {
      text: "Who is Umaku designed for?",
      answer: (
        <p>
          Umaku is built for AI product teams — including project managers,
          engineering leads, data science managers, and delivery leaders
          responsible for turning AI initiatives into production systems.
          <span className="block mb-2"></span>
          It’s designed for teams that need structure, governance, and
          visibility while developing real-world AI products.
        </p>
      ),
    },
    {
      text: "Is Umaku only for AI teams?",
      answer: (
        <p>
          Umaku is purpose-built for AI development workflows, but it can also
          support teams working on traditional software.
          <span className="block mb-2"></span>
          Its real value shines when managing model-driven products,
          experimentation-to-production workflows, and complex AI delivery
          cycles.
        </p>
      ),
    },
    {
      text: "How does Umaku help move from notebooks to production?",
      answer: (
        <p>
          Umaku helps teams operationalize AI by adding structure after
          experimentation — sprint planning, ticketing, code validation,
          governance, and reporting — turning research into production-ready
          systems.
        </p>
      ),
    },
    {
      text: "How is Umaku different from Jira with integrations?",
      answer: (
        <p>
          Jira requires heavy customization and third-party integrations to
          support AI workflows. Umaku is natively built for AI product
          development, offering:
          <ul className="list-disc pl-10 my-2">
            <li>Context-aware code and ticket validation</li>
            <li>Built-in project assistants</li>
            <li>Comprehensive automated review reports</li>
            <li>AI-powered team members selection</li>
          </ul>
          No fragile plugin ecosystem. No disconnected tools.
        </p>
      ),
    },
    {
      text: "Does Umaku replace managers or developers?",
      answer: (
        <p>
          No. Umaku augments teams — it doesn’t replace them.
          <br />
          Managers keep full control, and developers stay focused on building.
          <br />
          Umaku automates analysis, validation, and reporting so teams can make
          better decisions faster.
        </p>
      ),
    },
    {
      text: "How does governance work without slowing teams down?",
      answer: (
        <p>
          Governance is embedded directly into daily workflows. Quality gates
          and validations are automated, but leaders can always override.
          <span className="block mt-2"></span>
          This keeps standards high without blocking progress or adding
          bureaucracy.
        </p>
      ),
    },
    {
      text: "Can Umaku work alongside existing tools?",
      answer: (
        <p>
          Yes. Umaku integrates with tools like GitHub and can coexist with your
          existing stack. It centralizes intelligence and governance while
          letting teams keep the tools they already use.
        </p>
      ),
    },
  ];
  return (
    <section className="bg-background-soft bg-[url(/images/resources/pattern-3.svg)] bg-no-repeat bg-right">
      <div className="container mx-auto px-3 py-36">
        <h2 className="section-title text-center text-text-primary">
          Common Questions About Using Umaku
        </h2>
        <div className="mt-18 flex justify-center">
          <FAQsRaw
            faqs={faqs}
            questionColor="#000000"
            iconColor="#6B7280"
            answerColor="#3A3F4A"
            borderColor="#E3E8F5"
            className=" sm:4/5 md:w-3/5"
          />
        </div>
      </div>
    </section>
  );
}

function FAQsRaw({
  faqs,
  color = "",
  questionColor = "",
  answerColor = "",
  iconColor = "",
  borderColor = "",
  className = "",
}) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <ul className={` ${className}`}>
      {faqs?.map((faq, index) => (
        <li
          className={`cursor-pointer px-4 py-4 border-(--faq-border) border-t ${
            index === faqs.length - 1 ? "border-b" : ""
          }`}
          onClick={() => setActiveItem(activeItem === index ? null : index)}
          style={{
            "--faq-text": questionColor || color,
            "--faq-answer": answerColor || color,
            "--faq-border": borderColor || color,
          }}
        >
          <div className={`flex justify-between gap-2`}>
            <span className="text-(--faq-text) font-semibold text-lg">
              {faq.text}
            </span>
            <div>
              <Icon
                icon={
                  index === activeItem
                    ? "majesticons:minus"
                    : "majesticons:plus"
                }
                color={iconColor ? iconColor : color}
                width={18}
              />
            </div>
          </div>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              index === activeItem
                ? "grid-rows-[1fr] opacity-100 mt-2"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden text-(--faq-answer) pl-6 text-base font-medium">
              {faq.answer}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
