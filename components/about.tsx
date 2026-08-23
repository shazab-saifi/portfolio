import { MotionDiv } from "@/components/motion";
import { MotionText } from "@/components/motion-text";
import { Body, LinkText, Subheading } from "@/components/typography";

export function About() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <Subheading as="h1" id="about" className="text-[32px] leading-11">
        <MotionText>Shazab Saifi</MotionText>
        <br />
        <em className="font-accent font-normal italic">
          <MotionText>Design Engineer</MotionText>
        </em>
      </Subheading>
      <MotionDiv className="flex flex-col gap-6">
        <Body className="w-78 max-w-full">
          Hi, I&apos;m Shazab Saifi a Design Engineer and a full stack developer
          who loves to build with AI
        </Body>
        <Body>
          I care about making things that feel good to use, but I also care
          about how they&apos;re built. I enjoy turning rough ideas and designs
          into polished, responsive interfaces and thinking through the small
          details that make a product feel simple and intentional.
        </Body>
        <Body>
          Most of my time is spent somewhere between Figma, the browser, and the
          codebase: designing, building, breaking things, and making them
          better.
        </Body>
        <Body>
          I&apos;m especially interested in product design, frontend
          engineering, interaction, and the systems that bring all of them
          together.
        </Body>
        <Body>
          I&apos;m open to work. If you like my work, then you can reach out to
          me on my{" "}
          <LinkText
            href="https://x.com/shazabsaifi_s9"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 underline transition-colors hover:text-neutral-800"
          >
            𝕏
          </LinkText>{" "}
          account or via email{" "}
          <LinkText
            href="mailto:shazabdev@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 underline transition-colors hover:text-neutral-800"
          >
            shazabdev@gmail.com
          </LinkText>
        </Body>
      </MotionDiv>
    </section>
  );
}
