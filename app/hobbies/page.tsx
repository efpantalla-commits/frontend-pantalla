const hobbies = [
  {
    icon: "🎮",
    title: "Playing Online Games",
    description:
      "I enjoy playing online games during my free time for fun and entertainment.",
  },
  {
    icon: "🎬",
    title: "Watching Horror Movies",
    description:
      "I enjoy watching horror movies because I like suspenseful stories and exciting scenes.",
  },
  {
    icon: "🎵",
    title: "Listening to Music",
    description:
      "I enjoy listening to music whenever I want to relax or enjoy my free time.",
  },
  {
    icon: "📱",
    title: "Exploring Technology",
    description:
      "I like exploring different applications and learning how technology works.",
  },
  {
    icon: "🍿",
    title: "Watching Movies",
    description:
      "Watching movies is one of the ways I spend my free time and enjoy different stories.",
  },
  {
    icon: "🌐",
    title: "Browsing the Internet",
    description:
      "I enjoy browsing the internet to discover interesting things and learn something new.",
  },
];

export default function Hobbies() {
  return (
    <main className="container mx-auto max-w-5xl space-y-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Hobbies & Interests
        </h1>
        <p className="mt-2 text-muted-foreground">
          What I enjoy doing outside of my studies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3 text-2xl">
                {hobby.icon}
              </div>
              <h2 className="text-lg font-semibold">
                {hobby.title}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
