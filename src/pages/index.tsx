import { Inter } from "next/font/google";

import Month from "@/components/Calendar/Month";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Month />
    </main>
  );
}
