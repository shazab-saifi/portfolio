import { Body, Subheading } from "@/components/typography";

export function About() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <Subheading as="h1" className="text-[32px] leading-11">
        Shazab Saifi
        <br />
        <em className="font-accent font-normal italic">Design Engineer</em>
      </Subheading>
      <Body className="w-78 max-w-full">
        Hi, I’m Shazab Saifi a Design Engineer and a full stack developer who
        loves to build with AI
      </Body>
      <Body>
        I care about making things that feel good to use, but I also care about
        how they’re built. I enjoy turning rough ideas and designs into
        polished, responsive interfaces and thinking through the small details
        that make a product feel simple and intentional.
      </Body>
      <Body>
        Most of my time is spent somewhere between Figma, the browser, and the
        codebase: designing, building, breaking things, and making them better.
      </Body>
      <Body>
        I’m especially interested in product design, frontend engineering,
        interaction, and the systems that bring all of them together.
      </Body>
    </section>
  );
}
