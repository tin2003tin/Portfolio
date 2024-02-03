import Image from 'next/image';

export const Post = ({ header = "", pic = "", title = "", detail = "",tool = "",webLink = "",highlightWord = "", githubLink = ""}) => {
    return (
        <article className="box post post-excerpt">
        <header>
            <h2><a href="#">{header}</a></h2>
            <p>{title}</p>
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
            <Image src={pic} alt={header} width={2200} height={600} className={"border: 1px solid #000;"}/>
      </a>
        
        <p>
            <strong>{highlightWord}</strong> {detail}
        </p>
        <p>
           <strong>Tools : </strong>  {tool}
        </p>
        <p>
        <strong>Web link : </strong>  <a href={webLink}>{webLink}</a>
        </p>
        <p>
        <strong>Github link : </strong>  <a href={githubLink}>{githubLink}</a>
        </p>
        <hr></hr>
    </article>
    )
}