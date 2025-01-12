import Bio from "@/components/Bio";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row text-neutral-200 justify-between sm:h-screen my-24 mx-20 gap-14">
      <Bio />
      <Projects />
    </div>
  );
}
