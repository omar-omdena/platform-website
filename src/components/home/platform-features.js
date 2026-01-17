"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export function PlatfromFeatures() {
  const tabs = [
    {
      id: "overview",
      label: "Project Overview",
      component: ProjectOverview,
    },
    {
      id: "roadmap",
      label: "Roadmap & Sprints",
      component: Roadmap,
    },
    {
      id: "kanban",
      label: "Board & Backlog",
      component: Board,
    },
    {
      id: "ticket",
      label: "Tickets",
      component: Tickets,
    },
    {
      id: "feedback",
      label: "Agents Feedback",
      component: AgentsFeedback,
    },
    {
      id: "chatbot",
      label: "AI Chatbot",
      component: Chatbot,
    },
  ];

  return (
    <section className="section bg-background-soft bg-[url(/images/homepage/pattern-2.svg)] bg-no-repeat bg-top-left">
      <div className="px-3 container mx-auto">
        <div className="text-center">
          <h2 className="text-center section-title text-text-primary">
            One System
            <br />
            One Source of Transparency
          </h2>
          <p className="section-description">
            Everything you need to manage the full development lifecycle
          </p>
        </div>
        <div className="mt-8">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}

// *****************************************
// Tabs Component
// *****************************************

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;
  // const ActiveComponent = activeTab ? TAB_COMPONENTS[activeTab] : null;

  return (
    <>
      <nav className="flex gap-6 border-b border-neutral-200 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 cursor-pointer flex-1 font-bold text-xs sm:text-sm md:text-base transition-colors ${
                isActive
                  ? "border-b-2 border-primary text-primary"
                  : "border-b-2 border-transparent text-neutral-500 hover:text-[#62475C]"
              }`}
            >
              <div className="whitespace-normal">{tab.label}</div>
            </button>
          );
        })}
      </nav>
      <div className="w-full py-6 text-secondary">
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>
    </>
  );
}

// *****************************************
// Reusable Components for Tabs Bodies
// *****************************************

function Card({ children }) {
  return (
    <div className="p-10 bg-white border border-border-subtle shadow-[0px_10px_30px_-10px_#0000000D] rounded-3xl w-full">
      {children}
    </div>
  );
}

function Feature({ title, description, featureItems, image }) {
  return (
    <Card>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10">
        <div className="flex flex-col">
          <h3 className="text-text-primary text-2xl font-semibold mb-3">
            {title}
          </h3>
          <div className="flex lg:hidden justify-center mb-5 mt-2">
            <Image src={image} width={550} height={200} alt="asd" />
          </div>
          <p className="text-text-muted mb-10">{description}</p>
          <ul className="flex flex-col gap-5 text-base text-text-secondary font-medium">
            {featureItems.map((feat, index) => (
              <li key={index} className="flex gap-2">
                <span>
                  <Icon icon={feat.icon} width={25} className="text-primary" />
                </span>
                <span className="-mt-0.5">{feat.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex justify-end">
          <Image src={image} width={550} height={200} alt="asd" />
        </div>
      </div>
    </Card>
  );
}

// *****************************************
// Tabs Bodies
// *****************************************

function ProjectOverview() {
  const features = [
    {
      text: "Key project details, timeline, members, and overall progress in one view.",
      icon: "mdi:information-box-outline",
    },
    {
      text: "Sprint-by-sprint AI evaluation to track performance and improvement.",
      icon: "mdi:chart-line",
    },
    {
      text: "Ticket distribution across workflow stages for instant clarity.",
      icon: "mdi:chart-donut",
    },
    {
      text: "AI-flagged tasks that may fall outside the project scope.",
      icon: "humbleicons:ai",
    },
  ];
  return (
    <Feature
      title="The Project at a Glance"
      description=" A centralized snapshot of your project’s health, goals, and progress
            — combining operational insights with AI-driven evaluation to keep
            teams aligned and focused."
      featureItems={features}
      image="/images/homepage/project-overview.png"
    />
  );
}

function Roadmap() {
  const features = [
    {
      text: "Create and schedule sprints with clear goals and timeline.",
      icon: "mdi:calendar-outline",
    },
    {
      text: "Review finished sprints and delivered work at a glance.",
      icon: "fluent:checkmark-square-24-regular",
    },
    {
      text: "Preview planned sprints and prepare work ahead of time.",
      icon: "mdi:clock-outline",
    },
    {
      text: "Sprint's timeline displayed on a clear, interactive timeline chart.",
      icon: "bi:bar-chart-steps",
    },
  ];
  return (
    <Feature
      title="Sprint Timeline"
      description="Plan, track, and visualize sprints across your project timeline —
            from upcoming work to completed deliveries."
      featureItems={features}
      image="/images/homepage/roadmap.png"
    />
  );
}

function Tickets() {
  const features = [
    {
      text: "Create tasks, report bugs, assign owners, set priority, labels, due dates, and time estimates.",
      icon: "wpf:create-new",
    },
    {
      text: "Document requirements using rich text and attach supporting files.",
      icon: "mdi:file-outline",
    },
    {
      text: "Submit code commits, send comments and mention teammates.",
      icon: "mdi:code",
    },
    {
      text: "Invoke a dedicated AI agent to analyze and review a ticket.",
      icon: "mdi:face-agent",
    },
  ];
  return (
    <Feature
      title="Ticket Details"
      description="Create, update, and manage tickets in a focused workspace — from assignment and estimates to AI-assisted review."
      featureItems={features}
      image="/images/homepage/tickets.png"
    />
  );
}

function Board() {
  const features = [
    {
      text: "Add, rename, and organize custom columns to match your workflow.",
      icon: "bi:kanban",
    },
    {
      text: "Move tickets smoothly between columns as work progresses.",
      icon: "proicons:square-drag",
    },
    {
      text: "Sort tickets by last update to surface the most recent work.",
      icon: "iconoir:sort",
    },
    {
      text: "Filter tickets using natural language instead of complex rules.",
      icon: "mdi:magic",
    },
  ];
  return (
    <Feature
      title="Workflow Control"
      description="Manage, prioritize, and move work seamlessly across customizable workflows with AI-assisted filtering."
      featureItems={features}
      image="/images/homepage/boards.png"
    />
  );
}

function AgentsFeedback() {
  const features = [
    {
      text: "Measures how well sprint work aligns with goals, scope, and planned outcomes.",
      icon: "mdi:target-arrow",
    },
    {
      text: "Evaluates CI/CD practices, automation, and operational readiness.",
      icon: "mdi:settings-outline",
    },
    {
      text: "Assesses maintainability, readability, structure, and best practices.",
      icon: "mdi:code",
    },
    {
      text: "Analyzes defect detection, resolution speed, and production risk.",
      icon: "mdi:shield-alert-outline",
    },
  ];
  return (
    <Feature
      title="AI Sprint Review"
      description="AI-generated sprint evaluations covering quality, compliance, risks, and delivery performance."
      featureItems={features}
      image="/images/homepage/agents-feedback.png"
    />
  );
}

function Chatbot() {
  const features = [
    {
      text: "Understands project goals, charter, tech stack, and documentation.",
      icon: "mdi:brain",
    },
    {
      text: "Answers questions directly from the project’s source code.",
      icon: "mdi:code",
    },
    {
      text: "All discussions are saved and can be continued anytime.",
      icon: "mdi:clock-outline",
    },
  ];
  return (
    <Feature
      title="Project-Aware AI Assistant"
      description="A dedicated AI assistant for each project, with full awareness of its context, codebase, and history."
      featureItems={features}
      image="/images/homepage/chatbot.png"
    />
  );
}
