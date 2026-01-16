import Button from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section bg-background-soft bg-[url(/images/features/pattern-1.svg)] bg-no-repeat bg-center">
      <div className="px-3 container mx-auto flex flex-col items-center py-18">
        <h1 className="mb-8 text-text-primary text-4xl lg:text-5xl font-bold text-center md:leading-10 lg:leading-14 w-fit max-w-172.5">
          Features built for AI product reality — not generic workflows
        </h1>
        <p className="mb-10 text-lg text-text-primary max-w-137.5 text-center font-medium">
          Umaku embeds intelligence directly into how AI products move from
          notebooks to production — planning, reviewing, and governing with real
          context, not checklists.
        </p>
        <div className="flex gap-2 items-center font-medium">
          <Button
            type="primary-fill"
            text="Request a Demo"
            size={3}
            to="/demo"
          />
          <Button
            type="secondary-outline"
            text="See How it Works"
            size={3}
            to="/demo"
          />
        </div>
      </div>
    </section>
  );
}
