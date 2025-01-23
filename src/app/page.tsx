import Bio from "@/components/Bio";
import Links from "@/components/Links";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row text-neutral-200 justify-between md:h-[93%] pt-16 pb-10 px-24 gap-14">
      <Bio />
      <Projects />
      <div className='flex md:hidden justify-center'><Links /></div>
    </div>
  );
}
