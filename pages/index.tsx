import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

// Home page, 2026-10 refresh: the 9/20 approved preview in the site's dark theme (light theme follows the
// header toggle). Images are Real-ESRGAN upscales to 2600px of our own renders, so the full-screen hero stays sharp
// on a 2560-CSS-px / 1.5x display (hero slides 3840px). Styles: styles/home.css (all scoped under .bh). Previous page:
// Website_Content/index.tsx.before-2026-10-04 (gitignored) and git history.

// wide renders only: a tall frame (Corona) would lose its crown on a wide screen
const SLIDES = [
  { src: "/images/home/hero/gemelas-corner.jpg", name: "Gemelas", code: "GE-2601", pos: "center 40%" },
  { src: "/images/home/hero/podio-street.jpg", name: "Pódio", code: "PD-2601", pos: "center 45%" },
  { src: "/images/home/hero/curva-corner.jpg", name: "Curva", code: "CU-2601", pos: "center 45%" },
  { src: "/images/home/hero/giro-corner.jpg", name: "Giro", code: "GI-2601", pos: "center 35%" },
  { src: "/images/home/hero/diagrid-corner.jpg", name: "Diagrid", code: "DG-2601", pos: "center 30%" },
];

const PROJECTS = [
  { src: "/images/home/gemelas-corner.jpg", name: "Gemelas", code: "GE-2601", d: "Twin residential towers · sky bridges" },
  { src: "/images/home/podio-street.jpg", name: "Pódio", code: "PD-2601", d: "Mixed-use · retail podium · 5 storeys" },
  { src: "/images/home/curva-corner.jpg", name: "Curva", code: "CU-2601", d: "Residential tower · curved facade" },
  { src: "/images/home/corona-corner.jpg", name: "Corona", code: "CR-2601", d: "Mid-rise · crowned massing" },
  { src: "/images/home/faro-alto-corner.jpg", name: "Faro Alto", code: "FA-2602", d: "Tower · beacon crown · vertical core" },
  { src: "/images/home/diagrid-corner.jpg", name: "Diagrid", code: "DG-2601", d: "Office tower · diagrid exoskeleton" },
  { src: "/images/home/balcones-corner.jpg", name: "Balcones", code: "BA-2601", d: "Residential · stacked balcony bands" },
  { src: "/images/home/giro-corner.jpg", name: "Giro", code: "GI-2601", d: "Tower · twisting floor plates" },
];

function Hero() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const start = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6000);
  };
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);
  return (
    <div className="hero">
      {SLIDES.map((s, k) => (
        <figure key={s.src} className={`sl${k === i ? " on" : ""}`} aria-hidden={k !== i}>
          <img src={s.src} alt={`${s.name}, rendered from our Revit model`} style={{ objectPosition: s.pos }}
               loading={k === 0 ? "eager" : "lazy"} {...(k === 0 ? { fetchPriority: "high" as any } : {})} />
        </figure>
      ))}
      <div className="hero-in">
        <div className="hero-tx">
          <p className="kick">AI-driven Revit production for architecture firms</p>
          <h1>We build the models.<span>You do the architecture.</span></h1>
          <p className="sub">Send drawings. Get back native Revit on your template, built by AI-driven automation we wrote
            and signed off by a BIM specialist.</p>
          <div className="acts">
            <Link className="btn" href="/contact/">Send us a drawing</Link>
            <a className="line" href="#work">See the work</a>
          </div>
          <p className="cred mono"><span>Autodesk Developer Network member · #USUS0234</span><br /><span>Revit 2025–2027 · Produced in the United States</span></p>
        </div>
      </div>
      <div className="hcap">
        <span><b>{SLIDES[i].name}</b> <span className="mono">{SLIDES[i].code}</span></span>
        <div className="dots">
          {SLIDES.map((s, k) => (
            <button key={s.code} className={`dot${k === i ? " on" : ""}`} aria-label={`Show ${s.name}`}
                    onClick={() => { setI(k); start(); }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="BIM Ops Studio | Revit Production & Construction Documents for Architecture Firms"
      description="Send drawings, get back native Revit on your template: models, construction documents, site context and renderings, built by our own automation and signed off by a BIM specialist."
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <div className="bh">
        <Hero />

        <div className="ticker">
          <div><b>1,500+</b><span>automated Revit operations in production</span></div>
          <div><b>3,722</b><span>survey points verified against the county record on one site</span></div>
          <div><b>Fixed</b><span>price and delivery date, agreed before work starts</span></div>
          <div><b>2025–2027</b><span>Revit versions we deliver in</span></div>
        </div>

        <section className="why wrap">
          <p className="kick">Why firms send us their drawings</p>
          <h2 className="big">Your team keeps designing. The production comes back done, on your standards.</h2>
          <div className="whyg">
            <div><span className="mono">01</span><h3>Native Revit, your template</h3>
              <p>Real walls, doors, levels and sheets on your titleblock and standards. Not a traced shell your team has to rebuild.</p></div>
            <div><span className="mono">02</span><h3>A fixed price and a date</h3>
              <p>Send the drawings and you get a fixed price and a delivery date, agreed before any work starts.</p></div>
            <div><span className="mono">03</span><h3>Checked, not eyeballed</h3>
              <p>Every model is tied to the real project address. We check it against the county parcel, the survey and the lidar terrain, and map the site around it, so it sits where it is actually built.</p></div>
            <div><span className="mono">04</span><h3>A specialist signs off</h3>
              <p>Our automation does the volume. A BIM specialist reviews every set before it reaches you.</p></div>
          </div>
        </section>

        <section className="wrap" id="work">
          <div className="shead"><h2>Projects</h2><Link className="mono" href="/ai-renderings/">All renderings →</Link></div>
          <div className="biggrid">
            {PROJECTS.map((p) => (
              <Link className="bt" href="/ai-renderings/" key={p.code}>
                <img src={p.src} alt={`${p.name}: ${p.d}`} loading="lazy" />
                <span className="bt-m"><b>{p.name}</b><i className="mono">{p.code}</i></span>
                <span className="bt-d mono">{p.d}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="system">
          <div className="wrap">
            <p className="kick">The difference</p>
            <h2>Hundreds of studios do Revit production.<span>We built a system that does it.</span></h2>
            <div className="syscols">
              <p>Not a faster drafter. An automation layer we wrote ourselves that drives Revit directly, and a
                correction ledger behind it that gets more accurate every project, because every mistake is written
                down and never repeated.</p>
              <p>It is why a set comes back in days, and why placement is proved against the county record instead
                of eyeballed onto an aerial. A BIM specialist signs off on all of it.</p>
            </div>
            <p className="sysline">The system is not for sale. <em>What it produces is.</em></p>
          </div>
        </div>

        <section className="wrap">
          <div className="shead"><h2>Site and context</h2><Link className="mono" href="/3d-mapping/">Site and 3D mapping →</Link></div>
          <div className="sitepair">
            <figure><img src="/images/home/site-photo.jpg" loading="lazy" alt="Aerial photo of a block in Brickell, Miami (USDA NAIP, public domain)" />
              <figcaption><span className="mono">01</span>The aerial photo</figcaption></figure>
            <figure><img src="/images/home/site-revit.jpg" loading="lazy" alt="The same Brickell block built in Revit: 63 buildings to their recorded heights, the streets, the Metromover guideway and the park" />
              <figcaption><span className="mono">02</span>The same block, built in Revit</figcaption></figure>
          </div>
          <div className="feature sitetx">
            <div>
              <h3>From an aerial photo to the whole site in Revit</h3>
              <p>We take the aerial and the public record for the address and model the site at real size around your
                building: every neighbouring building to its recorded height, the streets, the transit line, the parks.
                This block in Brickell, Miami is 63 buildings, built from public data.</p>
            </div>
            <div>
              <ul>
                <li><span className="mono">01</span>Neighbouring buildings to their real height</li>
                <li><span className="mono">02</span>Streets, crossings, transit and parks</li>
                <li><span className="mono">03</span>County parcel lines and lidar terrain</li>
                <li><span className="mono">04</span>Placed on the project address, checked against the record</li>
              </ul>
              <div className="acts">
                <Link className="btn" href="/contact/">Send us an address</Link>
                <Link className="line" href="/3d-mapping/">See site work</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap">
          <div className="shead"><h2>What we produce</h2><Link className="mono" href="/services/">Services →</Link></div>
          <div className="caps">
            <Link href="/services/"><span className="mono">01</span><h3>Models</h3><p>PDF, DWG or sketch to native Revit.</p></Link>
            <Link href="/services/"><span className="mono">02</span><h3>Documents</h3><p>Sheets and schedules on your titleblock.</p></Link>
            <Link href="/3d-mapping/"><span className="mono">03</span><h3>Site</h3><p>Context, terrain and submittal files, measured.</p></Link>
            <Link href="/ai-renderings/"><span className="mono">04</span><h3>Renderings</h3><p>Rendered from your model, your design held exactly.</p></Link>
          </div>
        </section>

        <section className="closer wrap">
          <h2>Send us a drawing.</h2>
          <p>A fixed price and a delivery date, agreed before any work starts.</p>
          <Link className="btn" href="/contact/">Start a project</Link>
        </section>
      </div>
    </Layout>
  );
}
