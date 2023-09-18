import { Routes, Route } from 'react-router-dom'
import App from '../App'

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                index
                element={<App />}></Route>
        </Routes>
    )
}

export default AppRoutes
