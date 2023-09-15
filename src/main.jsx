import './styles/global.sass'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './component/AppRoutes'

// prevent regular experience to amplify web immersion
document.oncontextmenu = () => false
document.ondragstart = () => false

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
