import Bio from "@/components/Bio";
import Links from "@/components/Links";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row text-neutral-200 justify-between sm:h-[93%] pt-16 pb-12 px-24 gap-14">
      <Bio />
      <Projects />
      <div className='flex sm:hidden'><Links /></div>
    </div>
  );
}
