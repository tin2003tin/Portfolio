"use client"
import Image from 'next/image';

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

export const Post = ({ data }: { data: Archive }) => {
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
            src={data.imageUrl}
            alt={data.name}
            width={2200}
            height={600}
          />
      </a>
        
        <p>
            <strong>{data.highlight}</strong> {data.detail}
        </p>
        <p>
           <strong>Tools : </strong>  {data.tool}
        </p>
        <p>
        <strong>Web link : </strong>  <a href={data.webLink}>{data.webLink}</a>
        </p>
        <p>
        <strong>Github link : </strong>  <a href={data.githubLink}>{data.githubLink}</a>
        </p>
        <hr></hr>
    </article>
    )
}