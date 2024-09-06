import EcosystemIcon from "@/public/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold tracking-tighter md:text-6xl">
          Everything You need
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4 md:flex-1 md:flex-row">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/30 px-5 py-10 text-center"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
                <EcosystemIcon />
              </div>
              <h3 className="mb-2 mt-6 font-bold">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
