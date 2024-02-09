import { Pagination } from "@/components/content/pagination/pagination";
import { Post } from "@/components/content/post/post";
import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

interface Archive {
  name: string;
  imageUrl: string;
  title: string;
  highlight: string;
  detail: string;
  tool: string;
  webLink: string;
  githubLink: string;
}

export default async function Home() {
  const querySnapshot = await getDocs(collection(firestore, "archive"));
  return (
    <div id="content">
    <div className="inner">
      {querySnapshot.docs.map(doc => (
        <Post 
          key={doc.id}
          data={doc.data() as Archive}
        />
      ))}
           {/* <Post 
            header={"IMS Course"} 
            pic={"/lms-course/example1.png"}
            title={""}
            highlightWord = {"Build an LMS Platform"}
            detail={"Crafting my Learning Management System (LMS) on Next.js 14 has been an enriching journey. Lucide UI and Shadcn components bring elegance, while Clerk ensures secure authentication. Neon and Prisma handle data seamlessly, and Uploadthing simplifies user uploads. Mux delivers flawless video streaming, Stripe streamlines payments, and Vercel ensures swift deployment. This tech stack empowers a robust and user-centric LMS platform, marking a significant step in my journey as a developer. The experience gained from integrating these cutting-edge technologies will undoubtedly shape future projects, setting a high standard for the ever-evolving landscape of online education in 2023 and beyond."}
            tool= {"Framework : Next.js 14, Ui : Lucide, Component : Shadcn, Authentication : Clerk, Database : Neon(postgresql)+ Prisma, Storage : Uploadthing, Video : Mux, Payment : Stripe, Deploy : Vercel "}
            webLink={"https://lms-course-tin2003tins-projects.vercel.app/"}
            githubLink="https://github.com/tin2003tin/Project-lms-course"
          ></Post> */}
          <Pagination></Pagination>
      </div>
  </div>
  );
}
function State() {
  throw new Error("Function not implemented.");
}

