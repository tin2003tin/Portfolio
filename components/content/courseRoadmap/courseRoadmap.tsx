"use client"
import Image from 'next/image';
import { ArchiveType } from '@/types/archive';
import { CourseType } from '@/types/course';


export const CourseRoadmap = ({course} : {course : CourseType}) => {
    return (
        <article className="course">
        <header>
            <h2><a href="#">{}</a></h2>
            <p>{}</p>
        </header>
        <a href="#" className="">
          <Image
            src={ course.imageUrl || "/emptyPic.jpg"}
            alt={course.name || "image"}
            width={280}
            height={260}
          />
        </a>
        
        <p className='margin'>
            <strong>{course.name}</strong>
        </p>
        <p>
            {course.detail}
        </p>
            {
                course.youtubeLink ? 
                <p>
                <strong>Youtube Playlist link :</strong> <a href={course.youtubeLink} className='long-url'>{course.youtubeLink}</a>
                </p>
                : ""
            }
             {
                course.githubLink ? 
                <p>
                <strong>Github link :</strong> <a href={course.githubLink} className='long-url'>{course.githubLink}</a>
                </p>
                : ""
            }
    </article>
    )
}