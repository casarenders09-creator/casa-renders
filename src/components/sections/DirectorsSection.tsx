import { directors } from "@/content/directors";
import { formatPhoneDisplay, getPhoneHref } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

const leadershipNotes = [
  "Technical clarity before site complexity",
  "Calm, functional spaces with a distinct point of view",
] as const;

export function DirectorsSection() {
  return (
    <AnimatedSection id="directors" className="leadership-section section-mist">
      <Container>
        <div className="leadership-section__header">
          <p className="section-eyebrow">Leadership</p>
          <h2 className="display-heading">Two disciplines. One shared standard.</h2>
          <p>
            Interior design and structural engineering are led as connected parts of the same
            project conversation.
          </p>
        </div>

        <div className="leadership-profiles">
          {directors.map((director, index) => (
            <article key={director.id} className="leadership-profile">
              <div className="leadership-profile__index" aria-hidden="true">
                <span>0{index + 1}</span>
                <strong>{director.name.split(" ").map((part) => part[0]).join("")}</strong>
              </div>

              <div className="leadership-profile__identity">
                <p>{director.role}</p>
                <h3>{director.name}</h3>
                {director.experience ? <strong>{director.experience}</strong> : null}
              </div>

              <div className="leadership-profile__story">
                <p>{director.bioPlaceholder}</p>
                <blockquote>{leadershipNotes[index]}</blockquote>
                <a href={getPhoneHref(director.phone)}>
                  Speak with {director.name.split(" ")[0]}
                  <span>{formatPhoneDisplay(director.phone)}</span>
                  <b aria-hidden="true">↗</b>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
