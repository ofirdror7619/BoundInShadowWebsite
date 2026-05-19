import Image from "next/image";
import {
  CalendarDays,
  ChevronRight,
  Download,
  PlayCircle,
  ShieldHalf,
  Sparkles,
  Swords,
} from "lucide-react";

const gameplayFeatures = [
  {
    icon: Swords,
    title: "Shadow-driven combat",
    text: "Close the distance, punish openings, and chain abilities built around dark energy and momentum.",
  },
  {
    icon: ShieldHalf,
    title: "Survival over spectacle",
    text: "Every encounter is tuned around timing, positioning, and learning when to strike or retreat.",
  },
  {
    icon: Sparkles,
    title: "Power that changes you",
    text: "Collect souls, unlock upgrades, and evolve into something more dangerous than the enemies hunting you.",
  },
];

const betaNotes = [
  "Windows beta build V1.0",
  "Opening cinematic and first playable slice",
  "Core movement, combat, enemies, and progression",
  "Built for feedback ahead of the 2026 release",
];

const betaDownloadHref = "/Bound-In-Shadows-Beta-V1.0.exe";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#050202] text-[#f8ead1]"
    >
      <section className="relative min-h-[88svh] overflow-hidden bg-[#050202]">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#050202_0%,#110505_42%,#30070a_72%,#050202_100%)]" />
        <div className="absolute inset-y-0 right-[-42vw] top-8 flex w-[132vw] items-end justify-center opacity-45 sm:right-[-26vw] sm:w-[104vw] sm:opacity-60 md:opacity-75 lg:right-[-6vw] lg:w-[58vw] lg:opacity-100 xl:right-[2vw]">
          <Image
            src="/player.png"
            alt="The winged shadow player character in black armor with red ember light."
            width={1024}
            height={1536}
            priority
            sizes="(min-width: 1280px) 48vw, (min-width: 1024px) 56vw, 120vw"
            className="h-[80svh] max-h-[860px] w-auto object-contain object-bottom mix-blend-lighten drop-shadow-[0_34px_90px_rgba(127,17,27,0.42)] sm:h-[86svh] lg:h-[90svh]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050202_0%,rgba(5,2,2,0.96)_34%,rgba(5,2,2,0.54)_62%,rgba(5,2,2,0.14)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050202] via-[#050202]/72 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="font-serif text-lg tracking-[0.24em] text-[#f8ead1] uppercase"
            >
              Bound in Shadows
            </a>
            <nav className="hidden items-center gap-8 text-sm text-[#d9b96f] md:flex">
              <a className="transition hover:text-[#fff8df]" href="#intro">
                Intro
              </a>
              <a className="transition hover:text-[#fff8df]" href="#poster">
                Poster
              </a>
              <a className="transition hover:text-[#fff8df]" href="#download">
                Download
              </a>
              <a className="transition hover:text-[#fff8df]" href="#gameplay">
                Gameplay
              </a>
              <a className="transition hover:text-[#fff8df]" href="#beta">
                Beta
              </a>
            </nav>
            <a
              href="#download"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#d6a039]/55 bg-[#140506]/70 px-4 text-sm font-medium text-[#f2c76b] shadow-[0_0_34px_rgba(214,160,57,0.18)] backdrop-blur transition hover:border-[#ffd98a] hover:bg-[#d6a039] hover:text-[#120203]"
            >
              <Download size={16} aria-hidden="true" />
              Download
            </a>
          </header>

          <div className="flex flex-1 items-center py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.32em] text-[#f2c76b] uppercase">
                <Sparkles size={16} aria-hidden="true" />
                Dark fantasy action game
              </p>
              <h1 className="font-serif text-6xl leading-[0.9] text-balance text-[#fff8df] sm:text-7xl lg:text-8xl">
                Bound in Shadows
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#dfc7a2] sm:text-xl">
                Descend into a broken realm, master the dark, and turn the
                power hunting you into the weapon that carries you forward.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d6a039] px-5 text-sm font-semibold text-[#120203] transition hover:bg-[#ffe49a]"
                >
                  Download Beta
                  <Download size={17} aria-hidden="true" />
                </a>
                <a
                  href="#intro"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#d6a039]/35 bg-[#140506]/60 px-5 text-sm font-semibold text-[#f8ead1] backdrop-blur transition hover:border-[#f2c76b] hover:bg-[#7f111b] hover:text-white"
                >
                  Watch the Intro
                  <PlayCircle size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 border-t border-[#d6a039]/20 py-5 text-sm text-[#dfc7a2] sm:grid-cols-3">
            <p className="flex items-center gap-2">
              <CalendarDays size={16} className="text-[#f2c76b]" aria-hidden="true" />
              2026 release
            </p>
            <p className="flex items-center gap-2">
              <ShieldHalf size={16} className="text-[#f2c76b]" aria-hidden="true" />
              Windows beta
            </p>
            <p className="flex items-center gap-2">
              <Swords size={16} className="text-[#f2c76b]" aria-hidden="true" />
              Shadow combat
            </p>
          </div>
        </div>
      </section>

      <section
        id="intro"
        className="border-y border-[#d6a039]/18 bg-[#0b0505] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-[#f2c76b] uppercase">
              <PlayCircle size={17} aria-hidden="true" />
              Official game intro
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#fff8df] text-balance sm:text-5xl">
              Watch the opening descent into Bound in Shadows.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#c9a889]">
              The intro sets the tone before you play: a dark world, a
              dangerous power, and the first glimpse of what waits beyond the
              flames.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#d6a039]/35 bg-black shadow-[0_24px_80px_rgba(127,17,27,0.34)]">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/nGZHKNWLe14"
              title="Bound in Shadows game intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section
        id="poster"
        className="bg-[#050202] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-[#d6a039]/38 bg-black shadow-[0_28px_90px_rgba(127,17,27,0.42)] sm:max-w-md">
            <Image
              src="/bound-in-shadows-coming-soon.png"
              alt="Bound in Shadows coming soon poster with a dark winged figure, red flames, and gold title lettering."
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#f2c76b] uppercase">
              Coming soon
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#fff8df] text-balance sm:text-6xl">
              The shadows are yours. Chaos is your throne.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9a889]">
              Embrace the darkness, rule a broken world, manipulate shadows and
              souls, and evolve beyond mortal limits in the coming release of
              Bound in Shadows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d6a039] px-5 text-sm font-semibold text-[#120203] transition hover:bg-[#ffe49a]"
              >
                Download Beta
                <Download size={17} aria-hidden="true" />
              </a>
              <a
                href="/bound-in-shadows-coming-soon.png"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#d6a039]/35 bg-[#140506]/60 px-5 text-sm font-semibold text-[#f8ead1] transition hover:border-[#f2c76b] hover:bg-[#7f111b]"
              >
                Open Poster
                <ChevronRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="download"
        className="border-y border-[#d6a039]/18 bg-[#0b0505] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-[#f2c76b] uppercase">
              <Download size={17} aria-hidden="true" />
              Download
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#fff8df] text-balance sm:text-6xl">
              Bound in Shadows Beta V1.0 is ready to play.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9a889]">
              Download the Windows beta build and step into the broken world
              before the full release arrives.
            </p>
          </div>

          <div className="rounded-lg border border-[#d6a039]/28 bg-[#160607] p-6 shadow-[0_24px_70px_rgba(127,17,27,0.26)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.22em] text-[#f2c76b] uppercase">
                  Windows beta
                </p>
                <h3 className="mt-3 font-serif text-3xl text-[#fff8df]">
                  V1.0 installer
                </h3>
                <p className="mt-3 text-[#c9a889]">
                  EXE download, 1.76 GB
                </p>
              </div>
              <a
                href={betaDownloadHref}
                download
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#d6a039] px-5 text-sm font-semibold text-[#120203] transition hover:bg-[#ffe49a]"
              >
                Download
                <Download size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-5 border-t border-[#d6a039]/16 pt-5 text-sm leading-6 text-[#9f8268]">
              Windows may show a security prompt for new indie builds. Only run
              the file if you downloaded it from this official page.
            </p>
          </div>
        </div>
      </section>

      <section
        id="gameplay"
        className="bg-[#160607] px-5 py-12 text-[#f8ead1] sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#f2c76b] uppercase">
              Gameplay
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-[#fff8df] sm:text-5xl">
              Become the thing the darkness should have feared.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#d9b99b]">
            Bound in Shadows is built around direct control: move through
            hostile spaces, fight with intent, gather power, and push deeper
            into a world that rewards players who learn its rhythm.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
          {gameplayFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-lg border border-[#d6a039]/22 bg-[#090202]/76 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
              >
                <Icon size={24} className="text-[#f2c76b]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl text-[#fff8df]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-[#c9a889]">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="beta"
        className="border-y border-[#d6a039]/18 bg-[#050202] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#f2c76b] uppercase">
              Beta V1.0
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#fff8df] sm:text-5xl">
              A playable first step into Bound in Shadows.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-[#c9a889]">
              The beta should feel like the first real handshake with the game:
              clear, atmospheric, and focused on what players can actually try
              today.
            </p>
          </div>

          <div className="grid gap-4">
            {betaNotes.map((note, index) => (
              <div
                key={note}
                className="flex items-center gap-5 border-b border-[#d6a039]/16 pb-5 last:border-b-0 last:pb-0"
              >
                <span className="font-mono text-sm text-[#f2c76b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-[#f8ead1]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enter" className="bg-[#0b0505] px-5 py-20 text-[#f8ead1] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#f2c76b] uppercase">
              Play the beta
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-[#fff8df] sm:text-6xl">
              Download the current build and step into the shadows.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9a889]">
              Bound in Shadows Beta V1.0 is available now for Windows. The full
              game is planned for 2026.
            </p>
          </div>

          <div className="rounded-lg border border-[#d6a039]/28 bg-[#160607] p-6 shadow-[0_24px_70px_rgba(127,17,27,0.26)]">
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-[#f2c76b] uppercase">
                Windows beta
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[#fff8df]">
                V1.0 installer
              </h3>
              <p className="mt-3 leading-7 text-[#c9a889]">
                EXE download, 1.76 GB. Best played on a Windows PC with enough
                disk space for the installer and game files.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={betaDownloadHref}
                download
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d6a039] px-5 text-sm font-semibold text-[#120203] transition hover:bg-[#ffe49a]"
              >
                Download Beta
                <Download size={17} aria-hidden="true" />
              </a>
              <a
                href="#intro"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#d6a039]/35 bg-[#050202]/70 px-5 text-sm font-semibold text-[#f8ead1] transition hover:border-[#f2c76b] hover:bg-[#7f111b]"
              >
                Watch Intro
                <ChevronRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d6a039]/18 bg-[#050202] px-5 py-7 text-center text-sm text-[#c9a889] sm:px-8 lg:px-10">
        Bound In Shadows (2026) - A Game By Ofir Dror
      </footer>
    </main>
  );
}
