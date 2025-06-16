import { Link } from "react-router-dom"

const CardComponent = ({ curPost, single }) => {



    return (<div className="card" >
        <div className="card-body">
            <h5 className="card-title">{curPost.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{curPost.author}</h6>
            <p className="card-text over-text">{curPost.body}</p>

            {single ? <Link to="/posts" className="card-link">All Posts</Link> : <Link to={`/posts/${curPost.id}`} className="card-link">Single Post</Link>}


        </div>
    </div>)

}

export default CardComponent