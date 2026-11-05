
const contactInfo = [
  {
    icon: "✉️",
    title: "Email",
    value: "efpantalla@gbox.ncf.edu.ph",
  },
  {
    icon: "📞",
    title: "Phone",
    value: "+63 000 000 0000",
  },
  {
    icon: "📍",
    title: "Location",
    value: "Naga City, Philippines",
  },
];

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="mx-auto max-w-5xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Contact Me
          </h1>
          <p className="mt-2 text-muted-foreground">
            Have a question, collaboration idea, or project in mind?
            Reach out below!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              Contact Information
            </h2>

            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Send a Message */}
          <section className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Send a Message
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and I'll get back to you soon.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Hello"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                ✉️ Send Message
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
