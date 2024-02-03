import { Calendar } from "./calendar/calendar"


export const SideBar = () => {
    return (
        <div id="sidebar">
            {/* Logo */}
            <h1 id="logo"><a href="#">STRIPED</a></h1>
            {/* Nav */}
            <nav id="nav">
				<ul>
                    <li className="current"><a href="#">Latest Post</a></li>
					<li><a href="#">Archives</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact Me</a></li>
				</ul>
			</nav>
            {/* Search */}
            <section className="box search">
				<form method="post" action="#">
					<input type="text" className="text" name="search" placeholder="Search" />
				</form>
            </section>
            {/* Text */}
            <section className="box text-style1">
                <div className="inner">
					<p>
						<strong>Striped:</strong> A free and fully responsive HTML5 site
						template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a>
					</p>
				</div>
			</section>
            {/* Recent Posts */}
            <section className="box recent-posts">
						<header>
							<h2>Recent Posts</h2>
						</header>
						<ul>
							<li><a href="#">Lorem ipsum dolor</a></li>
							<li><a href="#">Feugiat nisl aliquam</a></li>
							<li><a href="#">Sed dolore magna</a></li>
							<li><a href="#">Malesuada commodo</a></li>
							<li><a href="#">Ipsum metus nullam</a></li>
						</ul>
			</section>
            {/* Recent Comments */}
            <section className="box recent-comments">
						<header>
							<h2>Recent Comments</h2>
						</header>
						<ul>
							<li>case on <a href="#">Lorem ipsum dolor</a></li>
							<li>molly on <a href="#">Sed dolore magna</a></li>
							<li>case on <a href="#">Sed dolore magna</a></li>
						</ul>
			</section>
            {/* Calendar */}
            <Calendar></Calendar>
            {/* Copyright */}
            <ul id="copyright">
						<li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
			</ul>
        </div>
    )
}