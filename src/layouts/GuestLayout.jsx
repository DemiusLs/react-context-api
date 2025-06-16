import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import PostContex from "../context/PostsContex,jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const GuestLayout = () => {


    const [curUrl, setCurUrl] = useState(null)
    const [post, setPost] = useState([]);



    useEffect(() => {


        axios.get(curUrl)

            .then(resp => {

                console.log(typeof (resp.data))

                const data = Array.isArray(resp.data) ? resp.data : [resp.data];
                setPost(data);


            }).catch(err => {
                console.error("Errore:", err);
                setPost([]);
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