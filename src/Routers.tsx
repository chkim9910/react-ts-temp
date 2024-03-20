import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { LayoutNone } from './components/Layout'
import Home from './views/home/Home'
import About from './views/about/About'
import SignIn from './views/SignIn'

const Routers: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<LayoutNone />}>
                <Route path="signin" element={<SignIn />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routers
