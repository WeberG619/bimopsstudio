import Head from "next/head";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

// How It Works, 2026-10 rebuild in the home page's .bh system (styles/home.css). The page shows the process on our own
// work: three office buildings (showcase-office, 10/4/26) taken massing -> rendering -> Revit model built from the
// rendering -> sheet set, with the narrated build videos. Previous page: Website_Content/ai-services.tsx.before-2026-10-04 and git.

const STAGES = [
  { n: "01", h: "Massing", img: "/images/how/a-massing.jpg", fit: "contain",
    p: "The big moves first: how the building sits on the corner, how tall it is, where it steps and cantilevers. Simple volumes in Revit, quick to compare." },
  { n: "02", h: "Rendering", img: "/images/how/a-render.jpg", fit: "cover",
    p: "That exact Revit view is rendered with AI, held to the massing and a project palette. The approved rendering becomes the design." },
  { n: "03", h: "Revit model", img: "/images/how/a-model.jpg", fit: "contain",
    p: "We measure the rendering (every band, fin, pier and bay) and build the Revit model to match it, down to the street in front." },
  { n: "04", h: "Documents", img: "/images/how/a-sheet.jpg", fit: "contain",
    p: "Plans, RCPs, elevations, sections and schedules on your titleblock, with the rendering in the set." },
];

const VIDEOS = [
  { src: "/videos/how/office-a.mp4", poster: "/images/how/a-poster.jpg", t: "Option A · Shifted bars", d: "Massing, rendering, model, street, core and sheets. 2:01" },
  { src: "/videos/how/office-b.mp4", poster: "/images/how/b-poster.jpg", t: "Option B · Stepped terraces", d: "One aerial rendering, built to match. 1:42" },
  { src: "/videos/how/office-c.mp4", poster: "/images/how/c-poster.jpg", t: "Option C · Carved corner", d: "A four-storey plaza carved out of the corner. 1:25" },
];

const OPTIONS = [
  { code: "BOS-2611A", t: "Option A · Shifted bars", render: "/images/how/a-render.jpg", model: "/images/how/a-model.jpg",
    d: "Limestone podium, glass behind bronze fins, and a white upper bar cantilevered past the corner." },
  { code: "BOS-2611B", t: "Option B · Stepped terraces", render: "/images/how/b-render.jpg", model: "/images/how/b-model.jpg",
    d: "Buff precast base, a terracotta tier and a glass top, stepping back from the street with planted terraces." },
  { code: "BOS-2611C", t: "Option C · Carved corner", render: "/images/how/c-render.jpg", model: "/images/how/c-model.jpg",
    d: "One charcoal block with a four-storey, timber-lined plaza carved out of the street corner." },
];

const STEPS = [
  { n: "01", h: "Send what you have", p: "A massing, a rendering, PDFs, DWGs, scans, sketches or redlines. For site work, the project address is enough to start." },
  { n: "02", h: "A fixed price and a date", p: "We review the source and come back with a fixed price and a delivery date, agreed before any work starts." },
  { n: "03", h: "Built and checked", p: "Built in Revit on your template by our automation, then checked: placement against the project address, county parcel, survey and lidar terrain; the model against the source, view by view." },
  { n: "04", h: "Signed off and delivered", p: "A BIM specialist reviews the set before it reaches you. You get native Revit and a coordinated PDF set, with one revision round included." },
];

const FAQ = [
  { q: "Can you start from a massing or a rendering instead of drawings?", a: "Yes. Send a massing, a sketch or an approved rendering and we build the Revit model to match it, then document it, the way the three office buildings on this page were done." },
  { q: "Does this replace our architects?", a: "No. We take the repetitive production work off your desk (modeling, sheet creation, view placement, annotation) and hand back finished files. Design, client relationships and the decisions that need professional judgment stay with your team, and so does the seal." },
  { q: "What Revit versions do you work in?", a: "Revit 2025, 2026 and 2027. We work in your version and hand back a native .rvt you can open and keep working in, built in your template with your families and naming." },
  { q: "Is our project data secure?", a: "Your files stay on infrastructure under our control and are never uploaded to third-party BIM services or used to train anything. Work is produced in the United States. Nothing is installed on your machines and nothing runs on your network." },
  { q: "Why is this faster than a conventional drafting team?", a: "Our own automation drives Revit directly: it builds the elements, places the views and assembles the sheets instead of clicking through them by hand. A specialist checks the result. You buy what it produces, not the software." },
];

export default function HowItWorks() {
  return (
    <Layout
      title="How It Works | BIM Ops Studio"
      description="From a massing to a Revit set: we render the massing, build the Revit model from the approved rendering and document it on your titleblock. Three office buildings, start to finish, with the build videos."
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <div className="bh">
        <div className="hero inner">
          <figure className="sl on">
            <img src="/images/how/a-render-hero.jpg" alt="Office Option A, the approved rendering the Revit model was built from" style={{ objectPosition: "center 40%" }}
                 loading="eager" {...({ fetchPriority: "high" } as any)} />
          </figure>
          <div className="hero-in">
            <div className="hero-tx">
              <p className="kick">How it works</p>
              <h1>From a massing<span>to a Revit set.</span></h1>
              <p className="sub">We render the massing, build the Revit model from the approved rendering, and document it on your
                titleblock. Here are three office buildings, start to finish.</p>
              <div className="acts">
                <Link className="btn" href="/contact/">Start a project</Link>
                <a className="line" href="#watch">Watch it built</a>
              </div>
            </div>
          </div>
          <div className="hcap"><span><b>Office, Option A</b> <span className="mono">BOS-2611A</span></span></div>
        </div>

        <div className="ticker">
          <div><b>1,500+</b><span>automated Revit operations in production</span></div>
          <div><b>Fixed</b><span>price and delivery date, agreed before work starts</span></div>
          <div><b>2025–2027</b><span>Revit versions we deliver in</span></div>
          <div><b>ADN</b><span>Autodesk Developer Network member #USUS0234</span></div>
        </div>

        <section className="why wrap" id="process">
          <p className="kick">The process</p>
          <h2 className="big">One building, four stages. Every stage is a real file.</h2>
          <div className="stages">
            {STAGES.map((s) => (
              <figure key={s.n}>
                <div className={"stimg " + s.fit}><img src={s.img} alt={`Office Option A, stage ${s.n}: ${s.h}`} loading="lazy" /></div>
                <figcaption><span className="mono">{s.n}</span><h3>{s.h}</h3><p>{s.p}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="wrap" id="watch">
          <div className="shead"><h2>Watch it built</h2><span className="mono">Recorded in Revit, hands off</span></div>
          <div className="vids">
            {VIDEOS.map((v, i) => (
              <figure key={v.src} className={i === 0 ? "vbig" : ""}>
                <video controls preload="none" playsInline poster={v.poster}>
                  <source src={v.src} type="video/mp4" />
                </video>
                <figcaption><b>{v.t}</b><span>{v.d}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="wrap">
          <div className="shead"><h2>Three buildings, one process</h2><span className="mono">Rendering, then the model built from it</span></div>
          <div className="opts">
            {OPTIONS.map((o) => (
              <div key={o.code} className="opt">
                <div className="pair">
                  <figure><img src={o.render} alt={`${o.t}, approved rendering`} loading="lazy" /><figcaption className="mono">Rendering</figcaption></figure>
                  <figure><img src={o.model} alt={`${o.t}, Revit model built from the rendering`} loading="lazy" /><figcaption className="mono">Revit model</figcaption></figure>
                </div>
                <div className="bt-m"><b>{o.t}</b><i className="mono">{o.code}</i></div>
                <span className="bt-d">{o.d}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="system">
          <div className="wrap">
            <p className="kick">Who does the work</p>
            <h2>Automation does the volume.<span>A specialist signs every set.</span></h2>
            <div className="syscols">
              <p>The production runs on software we wrote ourselves. It drives Revit directly, builds the elements, places
                the views and assembles the sheets, and it gets more accurate every project because every mistake is written
                down and checked for next time.</p>
              <p>Nothing leaves the studio without a BIM specialist's review against your standards and QA checklist. The
                work is produced in the United States, and nothing is installed on your side.</p>
            </div>
            <p className="sysline">You buy what it produces. <em>Not the software.</em></p>
          </div>
        </div>

        <section className="why wrap" id="steps">
          <p className="kick">Working with us</p>
          <h2 className="big">Four steps, one point of contact, no surprises on price.</h2>
          <div className="whyg">
            {STEPS.map((s) => (
              <div key={s.n}><span className="mono">{s.n}</span><h3>{s.h}</h3><p>{s.p}</p></div>
            ))}
          </div>
        </section>

        <section className="wrap">
          <div className="shead"><h2>What comes back</h2><Link className="mono" href="/services/">Services →</Link></div>
          <div className="feature">
            <img src="/images/how/c-model.jpg" alt="Office Option C, the Revit model with its street" loading="lazy" />
            <div>
              <h3>A working model, not a traced shell</h3>
              <p>Real walls, floors, curtain walls, doors, rooms and sheets your team can open and keep designing in, in your
                version of Revit, on your titleblock.</p>
              <ul>
                <li><span className="mono">01</span>Native .rvt built on your template, families and naming</li>
                <li><span className="mono">02</span>Plans, elevations, sections and schedules placed on your titleblock</li>
                <li><span className="mono">03</span>A coordinated PDF set</li>
                <li><span className="mono">04</span>The renderings, placed in the set</li>
                <li><span className="mono">05</span>One revision round against the delivered scope</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="wrap">
          <div className="shead"><h2>Placed on the real site</h2><Link className="mono" href="/3d-mapping/">Site and 3D mapping →</Link></div>
          <div className="feature rev">
            <img src="/images/work/hero-brickell.jpg" alt="Brickell site context model built from public mapping data" loading="lazy" />
            <div>
              <h3>Tied to the project address, checked against the record</h3>
              <p>On a real project, the model starts from where the building really is. We check placement against public
                records for the address and build the site around it, so the model sits where it will be built, not eyeballed
                onto an aerial.</p>
              <ul>
                <li><span className="mono">01</span>County parcel lines and the recorded lot area</li>
                <li><span className="mono">02</span>The survey you send, point by point</li>
                <li><span className="mono">03</span>USGS lidar terrain for real ground levels</li>
                <li><span className="mono">04</span>Surrounding buildings, streets and context, mapped</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="wrap">
          <div className="shead"><h2>Common questions</h2><Link className="mono" href="/faq/">All questions →</Link></div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </section>

        <section className="closer wrap">
          <h2>Send us a massing, a rendering or a drawing.</h2>
          <p>A fixed price and a delivery date, agreed before any work starts.</p>
          <Link className="btn" href="/contact/">Start a project</Link>
        </section>
      </div>
    </Layout>
  );
}
