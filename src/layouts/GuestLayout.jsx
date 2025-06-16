import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import PostContex from "../context/PostsContex,jsx";
import { useState } from "react";

const GuestLayout = () => {

    const [post, setPost] = useState(null);


    const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/?page=1&limit=50"

    const gameContextValues = {
        post, setPost
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