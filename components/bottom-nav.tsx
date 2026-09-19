"use client";

import { Home, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

type NavItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function NavItem({ href, label, icon, external, onClick }: NavItemProps) {
  return (
    <div className="group relative">
      <a
        href={href}
        aria-label={label}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="relative flex aspect-square w-10 shrink-0 cursor-pointer items-center justify-center rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        {icon}
      </a>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-opacity duration-200 group-hover:opacity-100 dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        {label}
      </span>
    </div>
  );
}

export function BottomNav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-30 px-3 sm:bottom-4">
      <div className="pointer-events-auto relative z-50 mx-auto flex h-14 w-fit max-w-full items-end justify-center gap-1 rounded-full border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl sm:gap-2">
        <NavItem
          href="#hero"
          label="Home"
          icon={<Home className="size-5" />}
        />
        <div className="m-auto h-2/3 w-px shrink-0 bg-border" />
        <NavItem
          href={personalInfo.github}
          label="GitHub"
          icon={<GitHubIcon className="size-5" />}
          external
        />
        <NavItem
          href={personalInfo.linkedin}
          label="LinkedIn"
          icon={<LinkedInIcon className="size-5" />}
          external
        />
        <NavItem
          href={personalInfo.x}
          label="X"
          icon={<XIcon className="size-5" />}
          external
        />
        <NavItem
          href={`mailto:${personalInfo.email}`}
          label="Email"
          icon={<Mail className="size-5" />}
        />
      </div>
    </div>
  );
}
