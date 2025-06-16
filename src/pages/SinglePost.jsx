import { useParams } from "react-router-dom"
import CardComponent from "../components/CardComponent";
import { useContext, useEffect } from "react";
import PostsContex from "../context/PostsContex,jsx";

const SinglePost = () => {

    const { post,setPost, setCurUrl } = useContext(PostsContex);
    const { id } = useParams();

    const urlPosts = `https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`;
    useEffect(() => { 

        setPost([]);            
        setCurUrl(urlPosts);

    }, [id]);


    return (

        <main>
            <div className="container">
                <h2 className="py-4">Single post card</h2>

                {post && post.length > 0 ? (
                    <CardComponent curPost={post[0]} single={true} />
                ) : (
                    <h2>Caricamento</h2>
                )}
            </div>

        </main>


    )



}

export default SinglePost