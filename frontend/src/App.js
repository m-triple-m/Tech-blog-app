import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import AddBlog from ".//Blog/addBlog";
import { useEffect, useState } from "react";
import { createTheme } from "@mui/system";
import { BlogProvider } from "./context";
// import ViewBlog from "./components/View Blog/viewBlog";
import Header from "./components/Header/header";
import Login from "./components/Login/login";
// import Home from "./components/Home/home";
import Signup from "./components/Signup/signup";
// import ListBlog from "./components/List Blog/listBlogs";
import Footer from "./components/Footer/footer";
// import ManageBlogs from "./components/Manage Blogs/manageBlogs";

function App() {
  const getUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      console.log(true);
      return true;
    } else {
      return false;
    }
  };

  const [darkMode, setdarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(true);

  useEffect(() => {
    console.log("dsds");
    setCurrentUser(() => {
      let user = sessionStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      } else {
        return {};
      }
    });
    setLoggedin(getUser());
  }, []);

  const myTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#390053",
      },

      background: {
        paper: "#2a3024",
      },
    },
  });

  return (
    <div>
      <BlogProvider>
        <BrowserRouter>
          <Header loggedin={loggedin} setLoggedin={setLoggedin} />
          <Routes>
            {/* <Route path={"/home"} element={<Home />} /> */}
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/"} element={<Navigate to="/home" />} />

            {/* <Route path={"/addBlog"} component={AddBlog} /> */}
            {/* <Route path={"/listBlog"} component={ListBlog} /> */}
            {/* <Route path={"/view/:id"} component={ViewBlog} /> */}
            {/* <Route path={"/manageBlogs"} component={ManageBlogs} /> */}
          </Routes>

          <Footer />
        </BrowserRouter>
      </BlogProvider>
    </div>
  );
}

export default App;
