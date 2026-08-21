import { LinkText, Subheading } from "@/components/typography";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
  { label: "Philosophy", href: "#philosophy" },
];

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <LinkText href={link.href}>{link.label}</LinkText>
        </li>
      ))}
    </ul>
  );
}

export function Nav() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-6 lg:hidden">
        <a href="#about" className="flex items-center gap-2.25 px-1">
          <span className="bg-accent size-4 rounded-full" />
          <Subheading as="span">About</Subheading>
        </a>
        <NavLinks className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1" />
      </header>
      <aside className="absolute inset-y-0 left-31.25 hidden pt-41 lg:block">
        <nav className="sticky top-41 w-25.5">
          <a href="#about" className="flex items-center gap-2.25 px-1">
            <span className="bg-accent size-4 rounded-full" />
            <Subheading as="span">About</Subheading>
          </a>
          <NavLinks className="mt-2 flex flex-col items-start gap-2 pl-7.25" />
        </nav>
      </aside>
    </>
  );
}
