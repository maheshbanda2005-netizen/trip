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
    <div className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/colleges" className="text-xs font-bold uppercase underline mb-8 block">
          ← Back to Finder
        </Link>

        <header className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
              {college.name}
            </h1>
            {college.ranking && (
              <span className="text-2xl font-black border-2 border-black dark:border-white px-3 py-1">
                #{college.ranking}
              </span>
            )}
          </div>
          <p className="text-xl opacity-70 font-medium uppercase">{college.location}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-y border-black dark:border-white py-12">
          <div>
            <h3 className="text-[10px] font-bold uppercase opacity-50 mb-4 tracking-widest">Tuition</h3>
            <p className="text-2xl font-black">${college.tuition.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase opacity-50 mb-4 tracking-widest">Placement Rate</h3>
            <p className="text-2xl font-black">{college.placementRate}%</p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase opacity-50 mb-4 tracking-widest">Accreditation</h3>
            <p className="text-2xl font-black">{college.accreditation || "N/A"}</p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-2xl font-black uppercase mb-6">About</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              {college.description}
            </p>

            <h2 className="text-2xl font-black uppercase mb-6">Majors</h2>
            <ul className="grid grid-cols-1 gap-2">
              {college.majors.map((major) => (
                <li key={major} className="text-sm font-bold uppercase border-l-4 border-black dark:border-white pl-4 py-1">
                  {major}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-6">Facilities</h2>
            <div className="flex flex-wrap gap-2 mb-12">
              {college.facilities?.map((facility) => (
                <span key={facility} className="text-[10px] font-bold uppercase px-3 py-1 bg-black text-white dark:bg-white dark:text-black">
                  {facility}
                </span>
              ))}
            </div>

            <div className="border border-black dark:border-white p-8">
              <h3 className="text-xl font-black uppercase mb-4 text-center">Interested?</h3>
              <p className="text-xs text-center opacity-70 uppercase mb-8">
                Start your journey with {college.name} today.
              </p>
              <div className="flex flex-col gap-4">
                <Button className="w-full">Apply Now</Button>
                <Link href={college.website || "#"} target="_blank">
                  <Button variant="secondary" className="w-full">Visit Website</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
