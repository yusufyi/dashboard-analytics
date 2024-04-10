import Image from "next/image";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen">
        <LeftSidebar />

        {/* Main Content */}
        {/* Right Sidebar */}
      </main>
    </ThemeProvider>
  );
}
