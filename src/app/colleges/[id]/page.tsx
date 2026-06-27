import { colleges } from "@/lib/data";
import Button from "@/components/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CollegeDetailsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const college = colleges.find((c) => c.id === params.id);

  if (!college) {
    notFound();
  }

  return (
    <div className="py-24 px-8 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-16">
          <Link href="/colleges" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all opacity-40 hover:opacity-100">
            <span>←</span> EXPLORE ALL INSTITUTIONS
          </Link>
        </nav>

        <header className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black px-3 py-1 border border-black dark:border-white uppercase tracking-widest">
                  Est. {college.established}
                </span>
                <span className="text-[10px] font-black px-3 py-1 bg-black text-white dark:bg-white dark:text-black uppercase tracking-widest">
                  {college.accreditation}
                </span>
              </div>
              <h1 className="text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                {college.name}
              </h1>
              <p className="text-2xl font-bold uppercase tracking-tight opacity-50">
                {college.location}
              </p>
            </div>
            {college.ranking && (
              <div className="p-8 border-4 border-black dark:border-white text-center min-w-[200px]">
                <span className="block text-[10px] font-black uppercase mb-2 opacity-40 tracking-widest">National Rank</span>
                <span className="text-7xl font-black italic">#{college.ranking}</span>
              </div>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <section className="mb-24">
              <h2 className="text-[10px] font-black uppercase mb-8 tracking-[0.2em] opacity-40">Institutional Overview</h2>
              <p className="text-3xl font-bold leading-tight uppercase tracking-tight mb-12">
                {college.description}
              </p>

              <div className="grid grid-cols-2 gap-12 border-y border-black dark:border-white py-12">
                <div>
                  <h3 className="text-[10px] font-black uppercase mb-4 opacity-40 tracking-widest">Annual Tuition</h3>
                  <p className="text-4xl font-black">${college.tuition.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase mb-4 opacity-40 tracking-widest">Placement Success</h3>
                  <p className="text-4xl font-black">{college.placementRate}%</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase mb-4 opacity-40 tracking-widest">Highest Package</h3>
                  <p className="text-4xl font-black">${(college.highestPackage || 0).toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase mb-4 opacity-40 tracking-widest">Primary Language</h3>
                  <p className="text-4xl font-black">ENGLISH</p>
                </div>
              </div>
            </section>

            <section className="mb-24">
              <h2 className="text-[10px] font-black uppercase mb-8 tracking-[0.2em] opacity-40">Core Disciplines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {college.majors.map((major) => (
                  <div key={major} className="group p-6 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                    <h4 className="text-xl font-black uppercase tracking-tighter">{major}</h4>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <section className="mb-16">
                <h2 className="text-[10px] font-black uppercase mb-8 tracking-[0.2em] opacity-40">Campus Ecosystem</h2>
                <div className="flex flex-wrap gap-2">
                  {college.facilities?.map((facility) => (
                    <span key={facility} className="text-[10px] font-black uppercase px-4 py-2 border border-black dark:border-white">
                      {facility}
                    </span>
                  ))}
                </div>
              </section>

              <section className="p-10 bg-black text-white dark:bg-white dark:text-black">
                <h3 className="text-3xl font-black uppercase leading-none mb-6">Take the<br />Next Step</h3>
                <p className="text-sm font-medium uppercase mb-10 opacity-60">
                  Ready to join the elite academic community at {college.name}? Begin your application or request a prospectus.
                </p>
                <div className="flex flex-col gap-4">
                  <Button className="w-full h-14 !bg-white !text-black dark:!bg-black dark:!text-white">Begin Application</Button>
                  <Link href={college.website || "#"} target="_blank">
                    <Button variant="secondary" className="w-full h-14 !border-white text-white dark:!border-black dark:text-black">Institutional Portal</Button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
