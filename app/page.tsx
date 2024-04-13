import Image from "next/image";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import { ThemeProvider } from "next-themes";
import MainSide from "./components/MainSide/MainSide";
import RightSide from "./components/RightSide/RightSide";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen">
        <LeftSidebar />
        <MainSide />
        <RightSide />
        {/* Main Content */}
        {/* Right Sidebar */}
      </main>
    </ThemeProvider>
  );
}
