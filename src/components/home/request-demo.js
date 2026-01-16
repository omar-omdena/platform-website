import Button from "@/components/ui/button";

export function RequestDemo() {
  return (
    <section className="section bg-background-muted">
      <div className="px-3 container mx-auto">
        <div className="w-full sm:w-11/12  md:3/4 max-w-175 mx-auto p-8 sm:p-16 rounded-2xl text-2xl sm:text-3xl md:text-4xl text-text-primary bg-[radial-gradient(55.31%_116.91%_at_50%_50%,_rgba(53,89,228,0.45)_0%,_rgba(254,117,112,0)_70%)]">
          <h2 className="text-center leading-13 font-semibold mb-6">
            Ready to Transform
            <span className="md:block"> Your Workflow?</span>
          </h2>
          <div className="flex justify-center">
            <Button
              type="primary-fill"
              text="Request a Demo"
              size={3}
              to="/request-demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
