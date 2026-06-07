import { useEffect, useState } from "react";
import { careers } from "../data/career";
import { certs } from "../data/certs";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Chip from "./ui/Chip";
import "./Career.scss";

type Tab = "career" | "certs";

function Career() {
  const [active, setActive] = useState<Tab>("career");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Tab>).detail;
      if (detail === "career" || detail === "certs") {
        setActive(detail);
      }
    };
    window.addEventListener("career:tab", handler);
    return () => window.removeEventListener("career:tab", handler);
  }, []);

  return (
    <Section id="career" className="career">
      <SectionTitle
        eyebrow="Career"
        title="지나온 시간."
        desc="디자이너 · 웹퍼블리셔의 재직 이력과 받은 자격을 정리합니다."
      />

      <div
        className="career__tabs"
        role="tablist"
        aria-label="Career and certification"
      >
        <Chip
          role="tab"
          active={active === "career"}
          aria-selected={active === "career"}
          aria-controls="career-panel-career"
          onClick={() => setActive("career")}
        >
          Career
        </Chip>
        <Chip
          role="tab"
          active={active === "certs"}
          aria-selected={active === "certs"}
          aria-controls="career-panel-certs"
          onClick={() => setActive("certs")}
        >
          Certification
        </Chip>
      </div>

      {active === "career" ? (
        <ol id="career-panel-career" role="tabpanel" className="ctimeline">
          {careers.map((c) => (
            <li
              key={c.company}
              className={`ctitem${c.current ? " is-current" : ""}`}
            >
              <span className="ctitem__dot" aria-hidden="true" />
              <div className="ctitem__body">
                <div className="ctitem__head">
                  <span className="ctitem__period">{c.period}</span>
                  {c.current && <span className="ctitem__badge">재직 중</span>}
                </div>

                <h3 className="ctitem__company">
                  {c.company}
                  <span className="ctitem__role">{c.role}</span>
                </h3>

                <p className="ctitem__summary">{c.summary}</p>

                <ul className="ctitem__highlights">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul className="ctitem__stack">
                  {c.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <ul
          id="career-panel-certs"
          role="tabpanel"
          className="bento bento--certs"
        >
          {certs.map((c) => (
            <li key={c.name} className="ccert">
              <strong className="ccert__name">{c.name}</strong>
              <span className="ccert__meta">
                {c.issuer} · {c.year}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

export default Career;
