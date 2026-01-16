import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Quick Links",
    children: [
      { label: "Features", href: "/features" },
      { label: "Resources", href: "/resources" },
      { label: "Guidebook", href: "/blog" },
    ],
  },
  {
    title: "Software Guidebook",
    children: [
      { label: "Create Project", href: "#" },
      { label: "Track Bugs", href: "#" },
      { label: "Plan Sprints", href: "#" },
      { label: "Create a Ticket", href: "#" },
      { label: "AI Chatbot", href: "#" },
      { label: "Agent Feedback", href: "#" },
    ],
  },
  {
    title: "Social Media",
    children: [
      { label: "LinkedIn", href: "#", icon: "mdi:linkedin" },
      { label: "X / Twitter", href: "#", icon: "prime:twitter" },
      { label: "Facebook", href: "#", icon: "mdi:facebook" },
      { label: "Instagram", href: "#", icon: "mdi:instagram" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-1 text-center gap-y-5 lg:grid-cols-[1fr_3fr] lg:text-start lg:gap-x-24">
          <div className="space-y-5 mb-5">
            <Link
              href="/"
              className="flex justify-center lg:justify-start items-center gap-2"
            >
              <Image src="/logo.png" alt="Logo" width={96} height={28} />
            </Link>
            <p className="max-w-md mx-auto text-sm text-text-muted">
              Build, manage, and ship software with clarity. Umaku blends AI
              agents with structured workflows so teams move faster together.
            </p>
          </div>
          <div className="grid gap-y-8 sm:grid-cols-2 md:grid-cols-3">
            {links.map((linksColumn, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                  {linksColumn.title}
                </h4>
                <ul className="space-y-2 text-sm text-text-muted">
                  {linksColumn.children.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 transition duration-200 hover:text-text-primary"
                      >
                        {link.icon ? (
                          <Icon
                            icon={link.icon}
                            className="duration-200 text-primary-soft group-hover:text-primary"
                            width={18}
                          />
                        ) : null}
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-3 border-t border-border-subtle pt-6 text-xs text-text-muted sm:flex-row sm:items-center">
          <span>{new Date().getFullYear()} Umaku. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
