import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Index from './Home'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PageUI from './Components/UI/PageUI'
import ContextProvider from './Context'

AOS.init({
  offset: 400,
  duration: 700,
})

const App = () => {

  return (
    <>
      <ContextProvider>
        <Router>

          <PageUI>

            <Routes >
              <Route path="/" element={<Index />} />
              <Route path="*" element={<Navigate to={`/`} />} />
            </Routes>

          </PageUI>

        </Router>
      </ContextProvider>
    </>
  )
}

export default App
