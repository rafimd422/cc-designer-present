import Card1 from "@/Components/Card1";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from "@/Assets/CC-golden.png";
import Card2 from "@/Components/Card2";
import Card3 from "@/Components/Card3";
import fahimCOVERCC from "@/Assets/fahimCOVERCC.jpg"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const ccOffecial = [{
    name:'Fahim Ahmed',
    authorImg:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qpiVrthJOtOckTNcSG9-MCfchJDe4CKfd06QcjEZuZAONND0',
    design:fahimCOVERCC,
    title:"CC's Old Activities to Present Activities showcase",
    theme:''
    },{
      name:'Omar Fahmid Khan',
      authorImg:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qpiVrthJOtOckTNcSG9-MCfchJDe4CKfd06QcjEZuZAONND0',
      design:"https://i.ibb.co/mzfMSKw/20240112-210506-0001.jpg",
      title:"",
      theme:'No Title and theme is Provided'
      }]

  const culturalEventChallenge = [{
    name:'Fahim Ahmed',
    authorImg:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qpiVrthJOtOckTNcSG9-MCfchJDe4CKfd06QcjEZuZAONND0',
    design:'https://i.ibb.co/nQVTRtL/CC-POSTER-MULTICULTURAL-1.jpg',
    title:'MultiCultural Heritage Hunt Event Poster',
    theme:'Simple and Clean with the combination of Yellow and Green and Bangladesh`s cultural Colours for background'
    },{
      name:'Omar Fahmid Khan',
      authorImg:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qpiVrthJOtOckTNcSG9-MCfchJDe4CKfd06QcjEZuZAONND0',
      design:'https://i.ibb.co/LgjP8Pq/cultural-classi-20240112-210427-0000.jpg',
      title:'',
      theme:'No title and theme is provided'
      }]

  const socialMediaCampaign = [{
    name:'Omar Fahmid Khan',
    authorImg:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qpiVrthJOtOckTNcSG9-MCfchJDe4CKfd06QcjEZuZAONND0',
    design:'https://i.ibb.co/WpBrBSW/20240112-210506-0000.jpg" alt="20240112-210506-0000',
    title:'',
    theme:'No title and theme is provided'
    }]

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-16 py-8 p-2 ${inter.className}`}
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

      <div className="flex flex-col text-start justify-start container mb-6 md:px-8">
        <h3 className="font-bold text-2xl">Category 1: CC OFFICIAL</h3>
        <p className="text-sm">
          Here Our Designers Created a cover for Cultural Classicists page and
          Group
        </p>
      </div>
      <div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
      {
        ccOffecial.map(socialMedia => <Card1 key={socialMedia?.name} social={socialMedia} />)
      }
      </div>

      <div className="flex flex-col text-start justify-start container mb-6 md:px-8">
        <h3 className="font-bold text-2xl">Category 2: Cultural Event Challenge</h3>
        <p className="text-sm">Here our designers created a vibrant and captivating poster for a multicultural event featuring music, art etc</p>
      </div>

      <div className="flex flex-wrap md:container mx-auto gap-6 justify-center md:px-8">
              {
        culturalEventChallenge.map(socialMedia => <Card2 key={socialMedia?.name} social={socialMedia} />)
      }
      </div>

      <div className="flex flex-col text-start justify-start container mb-6">
        <h3 className="font-bold text-2xl">Category 3: Social Media Campaign Challenge</h3>
        <p className="text-sm">Here our designers designed a banner for a collaborative Campaign with `the daily star` on the topic of pohela boishash</p>
      </div>
      <div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
      {
        socialMediaCampaign.map(socialMedia => <Card3 key={socialMedia?.name} social={socialMedia} />)
      }
      
      
      </div>
    </main>
  );
}
