import { Routes, Route } from 'react-router-dom'
import App from '../App'
import RegularHeader from '../Header/RegularHeader'

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                index
                element={<App />}></Route>
            <Route path='header' element={<RegularHeader />} ></Route>
        </Routes>
    )
}

export default AppRoutes
