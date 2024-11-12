import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Home from "./components/Home"
import Benefits from "./components/Benefits"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Privacy from "./components/Privacy"
import Terms from "./components/Terms"

function App() {
    const location = useLocation()
    return (
        <>
        <Header />
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route path="/" element={ <Home /> } />
                <Route path="/benefits" element={ <Benefits /> } />
                <Route path="/services" element={ <Services /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/privacy-policy" element={ <Privacy /> } />
                <Route path="/terms-and-conditions" element={ <Terms /> } />
                <Route path="*" element={ "404 not found" } />
            </Routes>
        </AnimatePresence>
        </>
    )
}

export default App