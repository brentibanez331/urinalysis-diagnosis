import Image from "next/image";
import Navbar from "@/app/components/nav/navbar";
import InputField from "./components/input/input";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar backgroundColor="red" fontSize={30}></Navbar>
      <InputField></InputField>
      <Footer></Footer>
    </main>
  );
}
