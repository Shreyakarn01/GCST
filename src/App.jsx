import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import { Outlet } from 'react-router-dom'
import Header from './components/Navbar/Header'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
