import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

const editorialFormats = [
  { number: "01", title: "Walkthroughs", note: "See how a space is planned, layered and resolved." },
  { number: "02", title: "Design explainers", note: "Practical thinking behind materials, layouts and lighting." },
  { number: "03", title: "Site stories", note: "The decisions that protect design intent during execution." },
] as const;

export function CasaRendersTVSection() {
  const hasVideos = siteConfig.youtubeVideoIds.length > 0;

  return (
    <AnimatedSection id="casa-renders-tv" className="tv-section section-paper">
      <Container>
        <div className="tv-section__feature">
          <div className="tv-section__visual">
            <SafeImage
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=88"
              alt="Contemporary interior visual for Casa Renders TV"
              loading="lazy"
            />
            <div className="tv-section__frame" aria-hidden="true">
              <span>Casa Renders TV</span>
              <small>Design · Structure · Site</small>
            </div>
            <a
              className="tv-section__play"
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the Casa Renders YouTube channel"
            >
              <span aria-hidden="true">▶</span>
            </a>
            <p>Stories behind the finished frame</p>
          </div>

          <div className="tv-section__copy">
            <p className="section-eyebrow">Watch the process</p>
            <h2 className="display-heading">The thinking is part of the work.</h2>
            <span>
              Casa Renders TV is the studio&apos;s editorial channel for walkthroughs, practical
              design advice and behind-the-scenes project thinking.
            </span>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
              Visit the YouTube channel <b aria-hidden="true">↗</b>
            </a>
          </div>
        </div>

        <div className="tv-section__formats">
          {editorialFormats.map((format) => (
            <article key={format.number}>
              <span>{format.number}</span>
              <h3>{format.title}</h3>
              <p>{format.note}</p>
            </article>
          ))}
        </div>

        {hasVideos ? (
          <div className="tv-section__videos">
            {siteConfig.youtubeVideoIds.map((videoId) => (
              <iframe
                key={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Casa Renders video"
                loading="lazy"
                allowFullScreen
              />
            ))}
          </div>
        ) : null}
      </Container>
    </AnimatedSection>
  );
}
