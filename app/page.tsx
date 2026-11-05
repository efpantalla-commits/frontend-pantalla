export default function Home() {
  return (
    <main className="container mx-auto px-4 py-20">
      <section className="mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">

        {/* Profile Initials */}
        <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/20 bg-primary text-5xl font-bold text-primary-foreground shadow-lg">
          EP
        </div>
        <div className="rounded-full border bg-card px-5 py-2 text-sm font-medium text-primary shadow-sm">
          Welcome to My Personal Portfolio
        </div>
        <div className="space-y-4">
          <p className="text-lg font-medium text-primary">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Eliza Faith Pantalla
          </h1>
          <h2 className="text-xl font-semibold text-muted-foreground sm:text-2xl">
            Bachelor of Science in Information Technology Student
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I am a second-year BSIT student at Naga College Foundation
          who enjoys learning about technology, exploring web
          development, and creating projects. I am always willing
          to learn new things and improve my skills.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:opacity-90"
          >
            About Me →
          </a>
          <a
            href="/contact"
            className="rounded-lg border bg-card px-6 py-3 font-medium hover:bg-muted"
          >
            Contact Me
          </a>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 pt-8 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <p className="mb-2 text-3xl">🎓</p>
            <h3 className="font-semibold">Education</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              2nd Year BSIT
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <p className="mb-2 text-3xl">💻</p>
            <h3 className="font-semibold">Interest</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Technology & Web Development
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <p className="mb-2 text-3xl">🌱</p>
            <h3 className="font-semibold">Goal</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Continuous Learning
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}