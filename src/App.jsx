import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import { login, logout } from './store/authSlice'
import {Footer,Header} from './components/index'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .catch(
      console.log("App.jsx :: App :: useEffect :: .catch(): error")
    )
    .finally(()=>setLoading(false))
  },[])
  

  if(loading){
    return(
      <><p>please wait. loading content...</p></>
    )
  }
  else{
    return(
      <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <Footer />
          <main>
            TODO: {/* <Outlet /> */}
          </main>
        </div>
      </div>
      </>
    )
  }
}

export default App
