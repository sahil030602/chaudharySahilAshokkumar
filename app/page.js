import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";
import Exp from "./components/Exp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Main/>
      <Exp/>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
