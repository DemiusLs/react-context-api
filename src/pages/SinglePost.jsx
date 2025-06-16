import { useParams } from "react-router-dom"
import CardComponent from "../components/CardComponent";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SinglePost = () => {



    const [singlePost, setSinglePosts] = useState(null);
    const { id } = useParams();

    const urlPosts = `https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`;

    useEffect(() => {

        axios.get(urlPosts)
            .then(resp => {
                setSinglePosts(resp.data);
            }
            )

    }, [id])

    return (

        <main>
            <div className="container">
                <h2 className="py-4">Single post card</h2>

                {singlePost ? <CardComponent curPost={singlePost} single={true} />
                    : <h2>Caricamento</h2>}
            </div>

        </main>


    )



}

export default SinglePost