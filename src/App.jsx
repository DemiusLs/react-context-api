import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from "./layouts/GuestLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import SinglePost from "./pages/SinglePost"
import UploadPost from "./pages/UploadPost"
import Page404 from "./pages/Page404"

function App() {


  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<GuestLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts"  >

              <Route path="" element={<Posts />} />
              <Route path="upload" element={<UploadPost />} />

              <Route path=":id" element={<SinglePost />} />

            </Route>


            <Route path="*" element={<Page404 />} />
          </Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
