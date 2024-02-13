import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
import { CourseRoadmap } from "@/components/content/courseRoadmap/courseRoadmap";
import { CourseType } from "@/types/course";

export default async function Course() {
  const course1 : CourseType = {
    name: "AWS Cloud",
    imageUrl: "/aws.png",
    title: "",
    highlight: "",
    detail: "This is my roadmap for cloud industry",
    tool: "", 
    youtubeLink: "https://www.youtube.com/playlist?list=PLsmnL_aleUqR_QhtQ1kVvRXhbSrTx2Veb",
    githubLink: "",
  }
  const course2 : CourseType = {
    name: "Big Data",
    imageUrl: "/bigdata.jpg",
    title: "",
    highlight: "",
    detail: "This is my roadmap for data industry",
    tool: "", 
    youtubeLink: "https://www.youtube.com/playlist?list=PLsmnL_aleUqT_MOHnqvF-6UcIyqiu7h4f",
    githubLink: "",
  }
  const course3 : CourseType = {
    name: "Artificial intelligence",
    imageUrl: "/ai.jpg",
    title: "",
    highlight: "",
    detail: "This is my roadmap for AI industry",
    tool: "", 
    youtubeLink: "https://www.youtube.com/playlist?list=PLsmnL_aleUqQKFWEkSR8s4c1zuEw2FUhw",
    githubLink: "",
  }
  
  const course4 : CourseType = {
    name: "Website",
    imageUrl: "/web.jpg",
    title: "",
    highlight: "",
    detail: "This is my roadmap for web industry",
    tool: "", 
    youtubeLink: "https://www.youtube.com/playlist?list=PLsmnL_aleUqQSEFKOyG4w6M7sfPOD26yz",
    githubLink: "",
  }
  const course5 : CourseType = {
    name: "Programming Methodology I",
    imageUrl: "/progmeth.png",
    title: "",
    highlight: "",
    detail: "This is lab project in Programming Methodology 1 at Chulalongkorn university",
    tool: "", 
    youtubeLink: "",
    githubLink: "https://github.com/tin2003tin/Course-Prog-meth",
  }


  const querySnapshot = await getDocs(collection(firestore, "archive"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
    return (
      <div id="content">
        <div className="inner">
          <div className="courses">
          <CourseRoadmap course={course1}></CourseRoadmap>
          <CourseRoadmap course={course2}></CourseRoadmap>
          <CourseRoadmap course={course3}></CourseRoadmap>
          <CourseRoadmap course={course4}></CourseRoadmap>
          <CourseRoadmap course={course5}></CourseRoadmap>
          </div>
        </div>
    </div>
    );
  }
  