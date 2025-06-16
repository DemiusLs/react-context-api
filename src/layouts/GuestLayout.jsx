import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import PostContex from "../context/PostsContex,jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const GuestLayout = () => {


    const [curUrl, setCurUrl] = useState(null)
    const [post, setPost] = useState([]);
    const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/?page=1&limit=50"


    useEffect(() => {
        

        axios.get(curUrl)

            .then(resp => {
                console.log(resp.data)
                console.log(post)
                setPost([...resp.data]);
                console.log(post)

            })

    }, [curUrl])





    const gameContextValues = {
        post, setPost, curUrl, setCurUrl
    };


    return (
        <>
            <PostContex value={gameContextValues}>
                <AppHeader />
                <Outlet />

            </PostContex>
        </>

    )


}


export default GuestLayout