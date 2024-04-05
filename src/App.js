import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes , useLocation} from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Category } from "./pages/category";
import { Recipe } from "./components/recipe";

function NoMatch(){
  let location = useLocation();

  return(
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occured</h3>
      <h5>Doesnt exist: {location.pathname}</h5>
    </div>
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
          <main className="container content">
            <Routes>
              <Route path="*" element={ <NoMatch/>}></Route>
              <Route path="/" element={<Home/>}></Route>
              <Route path="contact/" element={<Contact/>}></Route>
              <Route path="about/" element={<About/>}></Route>
              <Route path="category/:name" element={<Category/>}></Route>
              <Route path="meal/:id" element={<Recipe/>}></Route>
            </Routes>
          </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;