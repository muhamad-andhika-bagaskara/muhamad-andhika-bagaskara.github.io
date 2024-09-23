import Image from "next/image";
import Logo from "/public/dk_logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen w-screen">
      <Logo width={140} height={140} className="mb-3" />
      <p className="text-5xl">Dhika Portfolio</p>
      <p className="text-xl">Coming Soon!!! Stay update..</p>
    </div>
  );
}
