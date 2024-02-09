"use client"
import Image from 'next/image';
import { ArchiveType } from '@/types/archive';


export const Post = ({ data }: { data: ArchiveType }) => {
    const test = "";
    return (
        <article className="box post post-excerpt">
        <header>
            <h2><a href="#">{data.name}</a></h2>
            <p>{data.title}</p>
        </header>
        <div className="info">
            <span className="date"><span className="month">Jul<span>y</span></span> <span className="day">14</span><span className="year">, 2014</span></span>
            <ul className="stats">
                <li><a href="#" className="icon fa-comment">16</a></li>
                <li><a href="#" className="icon fa-heart">32</a></li>
                <li><a href="#" className="icon brands fa-twitter">64</a></li>
                <li><a href="#" className="icon brands fa-facebook-f">128</a></li>
            </ul>
        </div>
        <a href="#" className="image featured">
          <Image
            src={data.imageUrl ? data.imageUrl : "/emptyPic.jpg"}
            alt={data.name}
            width={2200}
            height={600}
          />
      </a>
        
        <p>
            <strong>{data.highlight}</strong> {data.detail}
        </p>
        <p>
           <strong>Tools : </strong>  {data.tool ? data.tool : "Use My pure heart"}
        </p>
        <p>
        <strong>Web link : </strong>  <a href={data.webLink ? data.webLink : ""}>{data.webLink? data.webLink : "No Web Link"}</a>
        </p>
        <p>
        <strong>Github link : </strong>  <a href={data.githubLink ? data.githubLink : ""}>{data.githubLink ? data.githubLink : "No Github Link"}</a>
        </p>
        <hr></hr>
    </article>
    )
}