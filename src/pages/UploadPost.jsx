import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UploadPost = () => {

    const navigate = useNavigate();
    const postLink = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
    const defaultPost = {

        author: "",
        title: "",
        body: "",
        public: false,
    }

    const [postToUpload, setPostToUpload] = useState(defaultPost)

    const handelChange = (e) => {

        const { name, value, type, checked } = e.target

        console.log(e.target.value)


        setPostToUpload({ ...postToUpload, [name]: type === "checkbox" ? checked : value })

    }

    const uploadPost = (event) => {
        event.preventDefault();



        axios
            .post(postLink, postToUpload)
            .then(resp => {
                console.log(resp)

                if (resp.data.id) {
                    setPostToUpload(defaultPost)
                    navigate(`/posts/${resp.data.id}`);
                }


            })

    }

    return (
        <main>
            <div className="container">

                <h1 className="py-4">Upload post</h1>

                <form onSubmit={uploadPost}>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="author" name="author" value={postToUpload.author} onChange={handelChange} />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={postToUpload.title} onChange={handelChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="body" rows="3" name="body" value={postToUpload.body} onChange={handelChange}></textarea>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="public" name="public" />
                        <label className="form-check-label" htmlFor="public" checked={postToUpload.public} onChange={handelChange}>Public</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </main >
    )
}

export default UploadPost

