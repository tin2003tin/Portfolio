import { Pagination } from "./pagination/pagination"
import { Post } from "./post/post"


export const Content = () => {
    return (
        <div id="content">
          <div className="inner">
                <Post header={"Project 1"} pic={"/pic01.jpg"}></Post>
                <Post header={"Lorem ipsum dolor sit amet"} pic={"/pic02.jpg"}></Post>
                <Pagination></Pagination>
            </div>
        </div>
    )
}