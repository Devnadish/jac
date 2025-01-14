import {useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'


function PageNotFound() {
  const navigate=useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
        navigate('/')
    },3000)

  },[navigate])
  return (
    <div>PageNotFound</div>
  )
}

export default PageNotFound