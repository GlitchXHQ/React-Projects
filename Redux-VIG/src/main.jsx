import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import Favorites from './components/Favourites.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/favourites' element={<Favorites/>}/>
      </Routes>
    </Provider>
  </BrowserRouter>
)
