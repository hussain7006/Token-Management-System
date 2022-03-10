import { height } from '@mui/system'
import React,{useEffect} from 'react'

function NotFound() {
    useEffect(()=>{
        document.title = 'hussain'
    })
  return (
    <div style={{backgroundColor: 'red', width:"1400px", height:'1300px'}}>
      <h1>Page Not found!</h1>
    </div>
  )
}

export default NotFound
