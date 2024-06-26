import React from 'react'
import Banner from '../Banner'
import { Outlet } from 'react-router-dom'
function LayoutPadrao() {
  return (
    <main>
        <Banner/>
        <Outlet/>
    </main>
  )
}

export default LayoutPadrao