import { Navbar } from "components";
import { ThemeContextProvider } from "contexts";
import { About, Contact, Home, Skills, Work } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <div className="absolute bottom-0 right-0 animate-pulse">
          <picture>
            <source
              media="(min-width:640px)"
              srcSet={"./assets/img/sm-simple.svg"}
            />
            <img src={"./assets/img/sm-simple.svg"} alt="Rombos" />
          </picture>
        </div>
        <div className="absolute top-0 left-0 animate-pulse">
          <picture>
            <source
              media="(min-width:640px)"
              srcSet={"./assets/img/sm-doble.svg"}
            />
            <img src={"./assets/img/sm-doble.svg"} alt="Rombos" />
          </picture>
        </div>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
