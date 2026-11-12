import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Header />
      
      <main className="flex flex-col flex-1">
        <Hero />
      </main>
    </div>
  );
}
