const education = [
  {
    icon: "🎓",
    level: "College",
    school: "Naga College Foundation",
    course: "Bachelor of Science in Information Technology",
    period: "2nd Year - Present",
    description:
      "Currently studying Information Technology and learning about programming, web development, database management, and other areas of technology.",
  },
  {
    icon: "🏫",
    level: "High School",
    school: "Tinago National High School",
    course: "Secondary Education",
    period: "",
    description:
      "Completed my high school education and gained knowledge and experiences that helped me prepare for college.",
  },
  {
    icon: "📚",
    level: "Elementary",
    school: "Tinago Central School",
    course: "Elementary Education",
    period: "",
    description:
      "My elementary school where I started building my knowledge and learning basic skills.",
  },
];
export default function Education() {
  return (
    <main className="container mx-auto max-w-4xl space-y-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Education
        </h1>
        <p className="mt-2 text-muted-foreground">
          My academic background and educational journey.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((item) => (
          <section
            key={item.level}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-2xl">
                {item.icon}
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-sm font-medium text-primary">
                    {item.level}
                  </p>
                  <h2 className="text-xl font-semibold">
                    {item.school}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {item.course}
                  </p>
                </div>

                {item.period && (
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.period}
                  </p>
                )}

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
