import React from 'react'

const Container = ({children}) => {
  return (
    <>
    <div className="container bg-light mt-5 p-5 border border-dark col-md-8">
        {children}
		</div>
    </>
  )
}

export default Container;