import Bio from "@/components/Bio";
import Links from "@/components/Links";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row text-neutral-200 justify-between md:h-[93%] pt-16 pb-10 px-6 sm:px-16 md:px-24 gap-14 bg-gradient-mesh relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
      <Bio />
      <Projects />
      <div className='flex md:hidden justify-center'><Links /></div>
    </div>
  );
}
