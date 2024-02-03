import { Pagination } from "@/components/content/pagination/pagination";
import { Post } from "@/components/content/post/post";

export default function Home() {
  return (
    <div id="content">
    <div className="inner">
          <Post 
            header={"Instagram Clone"} 
            pic={"/instagram-clone/example1.png"}
            title={""}
            highlightWord = {"Fullstack Instagram Clone"}
            detail={"Embarking on my programming journey, I'm thrilled to dive into the world of web development with my inaugural project, a captivating Instagram clone tutorial crafted by the talented developer at https://github.com/burakorkmez/instagram-clone. This immersive experience promises not only to hone my coding skills but also to unveil the intricate layers of building a sophisticated application, setting the stage for a transformative learning adventure. As I navigate through the intricacies of the tutorial, I eagerly anticipate uncovering the secrets behind crafting a seamless user interface, mastering state-of-the-art technologies, and gaining the prowess to customize this Instagram clone into a unique expression of my coding prowess. This project is not just a tutorial; it's a stepping stone toward becoming a proficient developer, equipped with the knowledge to create innovative and dynamic web applications."}
            tool= {" Framework : Vite-React, Ui : Chakra, Component : Chakra, Authentication : Firebase, Database : Firebase, Storage : Firebase, Deploy : Vercel "}
            webLink={"https://tin-my-tutorial-1.vercel.app"}
            githubLink="https://github.com/tin2003tin/Project-instagram-clone"
          ></Post>
           <Post 
            header={"IMS Course"} 
            pic={"/lms-course/example1.png"}
            title={""}
            highlightWord = {"Build an LMS Platform"}
            detail={"Crafting my Learning Management System (LMS) on Next.js 14 has been an enriching journey. Lucide UI and Shadcn components bring elegance, while Clerk ensures secure authentication. Neon and Prisma handle data seamlessly, and Uploadthing simplifies user uploads. Mux delivers flawless video streaming, Stripe streamlines payments, and Vercel ensures swift deployment. This tech stack empowers a robust and user-centric LMS platform, marking a significant step in my journey as a developer. The experience gained from integrating these cutting-edge technologies will undoubtedly shape future projects, setting a high standard for the ever-evolving landscape of online education in 2023 and beyond."}
            tool= {"Framework : Next.js 14, Ui : Lucide, Component : Shadcn, Authentication : Clerk, Database : Neon(postgresql)+ Prisma, Storage : Uploadthing, Video : Mux, Payment : Stripe, Deploy : Vercel "}
            webLink={"https://lms-course-tin2003tins-projects.vercel.app/"}
            githubLink="https://github.com/tin2003tin/Project-lms-course"
          ></Post>
          <Pagination></Pagination>
      </div>
  </div>
  );
}
