import Button from "@/components/Button";
import { users, trendingQuestions } from "@/lib/data";

export default function ProfilePage() {
  const user = users[1]; // Sarah Chen (Student)

  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Info */}
        <div className="lg:w-1/3">
          <div className="border border-black dark:border-white p-8 sticky top-24">
            <div className="w-32 h-32 bg-black dark:bg-white mb-8 mx-auto md:mx-0"></div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">{user.name}</h1>
            <p className="text-[10px] font-bold uppercase opacity-50 mb-6">{user.education}</p>

            <div className="space-y-6 mb-8 pb-8 border-b border-black/10 dark:border-white/10">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-2">Reputation</h3>
                <p className="text-2xl font-black italic">{user.reputation} PTS</p>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-2">Member Since</h3>
                <p className="text-xs font-bold uppercase">{new Date(user.joinedAt).toLocaleDateString()}</p>
              </div>
            </div>

            <h3 className="text-xs font-black uppercase tracking-widest mb-4">Earned Badges</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {user.badges.map(badge => (
                <div key={badge.id} title={badge.description} className="w-12 h-12 flex items-center justify-center border border-black dark:border-white text-2xl group relative cursor-help">
                  {badge.icon}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black text-[8px] font-black uppercase p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    {badge.name}
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full">Edit Profile</Button>
          </div>
        </div>

        {/* Activity Content */}
        <div className="lg:w-2/3">
          <div className="flex gap-8 border-b border-black dark:border-white mb-12 overflow-x-auto">
            <button className="pb-4 border-b-4 border-black dark:border-white text-sm font-black uppercase whitespace-nowrap">My Questions</button>
            <button className="pb-4 border-b-4 border-transparent text-sm font-bold uppercase opacity-50 hover:opacity-100 transition-all whitespace-nowrap">Saved Answers</button>
            <button className="pb-4 border-b-4 border-transparent text-sm font-bold uppercase opacity-50 hover:opacity-100 transition-all whitespace-nowrap">AI Interactions</button>
          </div>

          <div className="space-y-8">
            {trendingQuestions.filter(q => q.authorId === user.id).map(q => (
              <div key={q.id} className="border border-black dark:border-white p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold uppercase">
                    {q.topic}
                  </span>
                  <span className="text-[10px] opacity-50 font-bold uppercase">{new Date(q.createdAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight mb-4 hover:underline cursor-pointer">{q.title}</h2>
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-50">Status</span>
                    <span className="text-xs font-black uppercase">{q.status}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-50">Views</span>
                    <span className="text-xs font-black uppercase">{q.views}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-50">Answers</span>
                    <span className="text-xs font-black uppercase">2</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Mocking more activity */}
            <div className="border-2 border-dashed border-black/20 dark:border-white/20 p-12 text-center">
              <p className="text-xs font-black uppercase opacity-50">You haven&apos;t asked any more questions recently.</p>
              <Button variant="secondary" className="mt-4">Post a new question</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
