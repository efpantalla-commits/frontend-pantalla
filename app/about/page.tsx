const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "MySQL",
  "Web Development",
  "Database Management",
  "Programming",
];
export default function About() {
  return (
    <main className="container mx-auto max-w-4xl space-y-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p className="mt-2 text-muted-foreground">
          A bit about my background, interests, and technical skills.
        </p>
      </div>

      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">My Story</h2>
        </div>

        <div className="space-y-4 p-6 leading-relaxed text-muted-foreground">
          <p>
            Hello! I'm Eliza Faith Pantalla, a second-year
            Bachelor of Science in Information Technology
            student at Naga College Foundation.
          </p>

          <p>
            I am interested in technology and web development.
            I enjoy learning new things, exploring different
            technologies, and improving my knowledge through
            school activities and projects.
          </p>

          <p>
            As an IT student, I continue to develop my
            understanding of programming, databases, and
            website development. My goal is to improve my
            technical skills and become an IT professional
            in the future.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">
            Skills & Technologies
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 p-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
