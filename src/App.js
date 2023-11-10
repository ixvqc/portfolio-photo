import './App.css';
import Main from "./views/Main";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Offer from "./views/Offer"
import Stories from "./views/Stories"
import AboutMe from "./views/AboutMe";
import LoveStory from "./components/LoveStory";
import Pregnancy from "./components/Pregnancy";
import Reportage from "./components/Reportage";
import Womens from "./components/Womens";
import ImageUpload from "./firebase/ImageUpload";
import GalleryFolders from "./firebase/GalleryFolders";
import Contact from "./views/Contact";




const ProtectedRoute = ({ children }) => {


    return children
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>

            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                            <Main />
                            </ProtectedRoute>

                                }
                    />
                    <Route path="Header" element={<Header />} />
                    <Route path="Offer" element={<Offer />} />
                    <Route path="Stories" element={<Stories />} />
                    <Route path="AboutMe" element={<AboutMe />} />
                    <Route path="LoveStory" element={<LoveStory/>} />
                    <Route path="Pregnancy" element={<Pregnancy/>} />
                    <Route path="Reportage" element={<Reportage/>} />
                    <Route path="Womens" element={<Womens/>} />
                    <Route path="ImageUpload" element={<ImageUpload/>} />
                    <Route path="GalleryFolders" element={<GalleryFolders/>} />
                    <Route path="Contact" element={<Contact/>} />




                </Route>

            </Routes>
                </BrowserRouter>

        </div>
    );
}

export default App;