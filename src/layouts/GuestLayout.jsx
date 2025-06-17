import { useNavigate, Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import PostContex from "../context/PostsContex,jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import AlertComponent from "../components/AlertComponent";

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
                console.log("Errore axios:", err);


                if (err.response && err.response.status === 404) {
                    navigate("/not-found");
                } else {
                    setError("error");
                }
            })

    }, [curUrl])





    const gameContextValues = {
        post, setPost, curUrl, setCurUrl, error, setError
    };


    return (
        <>
            <PostContex value={gameContextValues}>
                <AppHeader />
                <AlertComponent />

                <Outlet />

            </PostContex>
        </>

    )


}


export default GuestLayout