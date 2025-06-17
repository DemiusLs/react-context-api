import { useContext, useEffect, useState } from "react";
import PostsContex from "../context/PostsContex,jsx";


const AlertComponent = () => {

    const { error } = useContext(PostsContex)

    const [alertText, setAlertText] = useState("ok");
    const [alertClass, setAlertClass] = useState("alert alert-success");
    useEffect(() => {

        if (error === "ok") {

            setAlertClass = "alert alert-success"
            setAlertText = "Operazione avvenuta con successo"
        } else if (error === "warning") {

            setAlertClass = "alert alert-warning"
            setAlertText = "Attenzione, problemi con l'operazione"

        } else if (error === "error") {

            setAlertClass = "alert alert-danger"
            setAlertText = "Operazione avvenuta con successo"

        }


    }, [error])

    return (
        <div className={alertClass} role="alert">
            {alertText}
        </div>
    )
}

export default AlertComponent;