import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Flame,
  LockKeyhole,
  Moon,
  PlayCircle,
  ShieldHalf,
  Sparkles,
  Swords,
} from "lucide-react";

const omens = [
  {
    icon: Moon,
    title: "A city under oath",
    text: "Ravenhollow sleeps behind iron gates, bound by a bargain no living ruler admits was made.",
  },
  {
    icon: LockKeyhole,
    title: "A name that opens doors",
    text: "Every locked chapel, archive, and graveyard answers to the same forbidden phrase.",
  },
  {
    icon: Flame,
    title: "A lantern that remembers",
    text: "Its silver fire burns only near a lie, and it has begun to burn without rest.",
  },
];

const cast = [
  {
    name: "Elian Vale",
    role: "Exiled ward of the crown",
    detail:
      "Carries the last court seal and a map that changes whenever moonlight touches it.",
  },
  {
    name: "Mara Vey",
    role: "Archivist of forbidden histories",
    detail:
      "Can read the margins ghosts leave behind, though every answer costs a memory.",
  },
  {
    name: "The Ashen Choir",
    role: "Keepers beneath the cathedral",
    detail:
      "They sing the gates shut each dawn and count the shadows that return at dusk.",
  },
];

const chapters = [
  "The Gate Without a Key",
  "Lanterns Beneath Blackwater",
  "The Saint of Broken Bells",
  "A Court of Borrowed Faces",
];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#090b0d] text-stone-100"
    >
      <section className="relative min-h-[88svh] overflow-hidden">
        <Image
          src="/bound-in-shadows-hero.png"
          alt="A moonlit ancient gate in mist with a lone cloaked figure carrying a lantern."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[61%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.94)_0%,rgba(5,6,7,0.74)_32%,rgba(5,6,7,0.23)_66%,rgba(5,6,7,0.54)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_21%_21%,rgba(190,154,86,0.22),transparent_23%),linear-gradient(180deg,rgba(9,11,13,0.28)_0%,rgba(9,11,13,0.04)_58%,#090b0d_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="font-serif text-lg tracking-[0.24em] text-stone-100 uppercase"
            >
              Bound in Shadows
            </a>
            <nav className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
              <a className="transition hover:text-white" href="#intro">
                Intro
              </a>
              <a className="transition hover:text-white" href="#story">
                Story
              </a>
              <a className="transition hover:text-white" href="#cast">
                Cast
              </a>
              <a className="transition hover:text-white" href="#chapters">
                Chapters
              </a>
            </nav>
            <a
              href="#enter"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-amber-200/35 bg-stone-950/40 px-4 text-sm font-medium text-amber-100 shadow-[0_0_32px_rgba(197,155,79,0.16)] backdrop-blur transition hover:border-amber-100/70 hover:bg-amber-100 hover:text-stone-950"
            >
              <BookOpen size={16} aria-hidden="true" />
              Begin
            </a>
          </header>

          <div className="flex flex-1 items-center py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.32em] text-amber-200 uppercase">
                <Sparkles size={16} aria-hidden="true" />
                Dark fantasy saga
              </p>
              <h1 className="font-serif text-6xl leading-[0.9] text-balance text-white sm:text-7xl lg:text-8xl">
                Bound in Shadows
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                An exiled heir, a silver lantern, and a city that must never
                remember the bargain buried beneath its stones.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#enter"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amber-200 px-5 text-sm font-semibold text-stone-950 transition hover:bg-white"
                >
                  Enter the Archive
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="#intro"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-stone-200/25 bg-stone-950/35 px-5 text-sm font-semibold text-stone-100 backdrop-blur transition hover:border-stone-100/70 hover:bg-stone-100 hover:text-stone-950"
                >
                  Watch the Intro
                  <PlayCircle size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/10 py-5 text-sm text-stone-300 sm:grid-cols-3">
            <p className="flex items-center gap-2">
              <CalendarDays size={16} className="text-amber-200" aria-hidden="true" />
              First volume announced
            </p>
            <p className="flex items-center gap-2">
              <ShieldHalf size={16} className="text-amber-200" aria-hidden="true" />
              Court intrigue
            </p>
            <p className="flex items-center gap-2">
              <Swords size={16} className="text-amber-200" aria-hidden="true" />
              Cursed alliances
            </p>
          </div>
        </div>
      </section>

      <section
        id="intro"
        className="border-y border-white/10 bg-[#101313] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-amber-200 uppercase">
              <PlayCircle size={17} aria-hidden="true" />
              Official game intro
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white text-balance sm:text-5xl">
              Watch the opening descent into Bound in Shadows.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-stone-400">
              The intro sets the mood before the archive opens: shadowed gates,
              old power, and the first glimpse of what waits beyond the oath.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
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
        id="story"
        className="bg-[#f0ece2] px-5 py-12 text-stone-950 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#7b1e2f] uppercase">
              The oath beneath Ravenhollow
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Every shadow in the city belongs to someone. Some are trying to
              come home.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            For three centuries, Ravenhollow has survived by forgetting. Names
            vanish from ledgers. Bells ring for funerals no one attended. When
            Elian Vale returns with a lantern that exposes buried truths, the
            city answers with locked gates, masked courts, and a darkness that
            knows his voice.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
          {omens.map((omen) => {
            const Icon = omen.icon;

            return (
              <article
                key={omen.title}
                className="rounded-lg border border-stone-300/80 bg-white/62 p-6 shadow-sm"
              >
                <Icon size={24} className="text-[#7b1e2f]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl">{omen.title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{omen.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="cast"
        className="border-y border-white/10 bg-[#101313] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-amber-200 uppercase">
                Names written in ash
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                The Bound
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-stone-400">
              Allies, rivals, and witnesses keep the city standing. None of
              them are certain they are on the same side of the bargain.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {cast.map((member) => (
              <article
                key={member.name}
                className="rounded-lg border border-white/10 bg-[#181b1a] p-6"
              >
                <p className="text-sm font-semibold tracking-[0.22em] text-amber-200 uppercase">
                  {member.role}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-white">{member.name}</h3>
                <p className="mt-4 leading-7 text-stone-400">{member.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="chapters" className="bg-[#090b0d] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-amber-200 uppercase">
              The opening volume
            </p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              Follow the lantern through four sealed doors.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {chapters.map((chapter, index) => (
              <a
                key={chapter}
                href="#enter"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-amber-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-stone-100 transition group-hover:text-amber-100">
                    {chapter}
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  className="shrink-0 text-stone-500 transition group-hover:translate-x-1 group-hover:text-amber-200"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="enter" className="bg-[#f0ece2] px-5 py-20 text-stone-950 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#7b1e2f] uppercase">
            The gate is listening
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-6xl">
            Step into Ravenhollow before the shadows learn your name.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Join the archive list for dispatches, chapter reveals, and relics
            from the world of Bound in Shadows.
          </p>
          <form className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="reader@ravenhollow.com"
              className="h-12 min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-4 text-base text-stone-950 outline-none transition placeholder:text-stone-500 focus:border-[#7b1e2f] focus:ring-4 focus:ring-[#7b1e2f]/15"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#7b1e2f] px-5 text-sm font-semibold text-white transition hover:bg-stone-950"
            >
              Request Entry
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
