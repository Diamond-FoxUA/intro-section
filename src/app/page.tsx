import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Header />

      <main className="flex flex-col flex-1 w-full h-auto md:px-4.5">
        <Hero />
      </main>

      <Toaster richColors position="top-right" />
    </div>
  );
}
