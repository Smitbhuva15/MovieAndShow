import { useState } from 'react'
import Header from '../src/commoponent/Header'
import Footer from '../src/commoponent/Footer'
import { store } from './feature/store'
import { Provider } from 'react-redux'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (

    <Provider store={store}>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </Provider>

  )
}

export default App
