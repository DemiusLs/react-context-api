import { Link } from "react-router-dom";

const Page404 = () => {

    return (
        <main>
            <div className="container ">

                <h1 className="text-center my-5">404 NOT FOUND</h1>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-outline-warning">Torna alla home</Link>

                </div>


            </div>
        </main>
    )
}

export default Page404;