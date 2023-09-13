import { Routes, Route } from 'react-router-dom'
import App from '../App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<App />} />
    </Routes>
  )
}

export default AppRoutes

