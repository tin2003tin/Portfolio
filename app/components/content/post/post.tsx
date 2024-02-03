import Image from 'next/image';

export const Post = ({ header = "", pic = "" }) => {
    return (
        <article className="box post post-excerpt">
        <header>
            <h2><a href="#">{header}</a></h2>
            <p>A free, fully responsive HTML5 site template by HTML5 UP</p>
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
            <Image src={pic} alt={header} width={500} height={500} />
      </a>
        
        <p>
            <strong>Hello!</strong> You&apos;re looking at <strong>Striped</strong>, a fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a>
            for <a href="http://html5up.net">HTML5 UP</a> It features a clean, minimalistic design, styling for all basic page elements (including blockquotes, tables and lists), a
            repositionable sidebar (left or right), and HTML5/CSS3 code designed for quick and easy customization (see code comments for details).
        </p>
        <p>
            Striped is released for free under the <a href="http://html5up.net/license">Creative Commons Attribution license</a> so feel free to use it for personal projects
            or even commercial ones &ndash; just be sure to credit <a href="http://html5up.net">HTML5 UP</a> for the design. If you like what you see here, be sure to check out
            <a href="http://html5up.net">HTML5 UP</a> for more cool designs or follow me on <a href="http://twitter.com/ajlkn">Twitter</a> for new releases and updates.
        </p>
    </article>
    )
}