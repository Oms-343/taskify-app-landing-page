import ArrowRight from "@/public/icons/arrow-w.svg";

export default function Banner() {
  return (
    <div className="bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]">
      <div className="container py-3 text-center">
        <div className="">
          <p className="flex items-center justify-center gap-2 font-medium">
            <span className="hidden md:inline">
              This page is included in a free SaaS Website Kit -
            </span>
            <a href="#" className="">
              View the complete kit
            </a>
            <ArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
}
