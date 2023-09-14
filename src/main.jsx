import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './component/AppRoutes'
import './styles/global.sass'

// prevent regular experience to amplify web immersion
document.oncontextmenu = () => false

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
