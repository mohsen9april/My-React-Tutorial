import Navbar from './Navbar';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}
// function App() {

//   let component
//   switch (window.location.pathname) {
//     case "/":
//       component = <Home />
//       break;
//     case "/pricing":
//       component = <Pricing />
//       break;
//     case "/about":
//       component = <About/>
//       break;
//   }

//   return (
//     <>
//       <Navbar/>
//       <div className='container'> {component}</div>
//     </>
//   );
// }

export default App;
