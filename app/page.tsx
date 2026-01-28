import CreatorProfile from "@/components/CreatorProfile";
import DashboardInterface from "@/components/DashboardInterface";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white selection:bg-indigo-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-4">
        <CreatorProfile />
        <DashboardInterface />
      </div>

    </main>
  );
}
