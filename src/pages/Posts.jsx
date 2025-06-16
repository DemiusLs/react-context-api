
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import PostsContex from "../context/PostsContex,jsx";

const Posts = () => {

    const { post, setCurUrl } = useContext(PostsContex);

    const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/?page=1&limit=50"

    useEffect(() => {

        setCurUrl(urlPosts)


    }, [])



    return (
        <>
            <main>
                <div className="container">


                    <h1 className="py-4 text-center">All post cards</h1>
                    {post !== null ? (<div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                        {post.map((curPost, index) => (

                            < div className="col" key={index}>
                                <CardComponent curPost={curPost} single={false} />
                            </div>

                        )

                        )}



                    </div>) : (<h2> Caricando</h2>)}



                </div>





            </main >
        </>
    );
};

export default Posts;