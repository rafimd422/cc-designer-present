import Card1 from "@/Components/Card1";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from "@/Assets/CC-golden.png";
import Card2 from "@/Components/Card2";
import Card3 from "@/Components/Card3";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-4 py-8 p-2 ${inter.className}`}
    >
      <Image
        alt="Cultural Classistists"
        height={3}
        width={400}
        className="my-8"
        src={Logo}
      />
      <p className="text-[1.120rem] my-1 container">
        🎨 Explore the creativity of our talented graphic designers! At Cultural
        Classicists, we pride ourselves on delivering stunning visuals and
        innovative designs. Dive into a world of creativity as our designers
        showcase their skills through three distinct task categories. Here is
        some designs acording to the categories:
      </p>
      <br />

      <div className="flex flex-col text-start justify-start container mb-6">
        <h3 className="font-bold">Category 1: CC OFFICIAL</h3>
        <p className="text-sm">
          Here Our Designers Created a cover for Cultural Classicists page and
          Group
        </p>
      </div>
      <div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
        <Card1 />
      </div>

      <div className="flex flex-col text-start justify-start container mb-6">
        <h3 className="font-bold">Category 2: CC OFFICIAL</h3>
        <p className="text-sm">Here our designers created a vibrant and captivating poster for a multicultural event featuring music, art etc</p>
      </div>

      <div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
        <Card2 />
      </div>

      <div className="flex flex-col text-start justify-start container mb-6">
        <h3 className="font-bold">Category 3: CC OFFICIAL</h3>
        <p className="text-sm">Here our designers designed a banner for a collaborative Campaign with 'the daily star' on the topic of pohela boishash</p>
      </div>
      <div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
        <Card3 />
      </div>
    </main>
  );
}
