import { useNavigate, Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import PostContex from "../context/PostsContex,jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const GuestLayout = () => {


    const [curUrl, setCurUrl] = useState(null)
    const [post, setPost] = useState([]);

    const [error, setError] = useState("")
    const navigate = useNavigate();



    useEffect(() => {
        setError("");

        console.log(curUrl)

        axios.get(curUrl)


            .then(resp => {

                const data = Array.isArray(resp.data) ? resp.data : [resp.data];
                setPost(data);


            }).catch(err => {
                console.error("Errore axios:", err); // Meglio usare error.response

                setPost([]);

                if (err.response && err.response.status === 404) {
                    navigate("/not-found");
                } else {
                    setError("Errore sconosciuto");
                }
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