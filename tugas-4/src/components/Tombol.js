import React from 'react'

function Tombol(props) {
  return (
    <button onClick={()=>alert(`Anda Telah Mengklik Tombol ${props.nama}`)}>{props.nama}</button>
  )
}

export default Tombol