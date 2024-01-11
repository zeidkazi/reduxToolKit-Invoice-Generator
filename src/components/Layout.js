import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <div className='max-w-[1600px] mx-auto '>
      {children}
    </div>
    </>
  )
}

export default Layout
