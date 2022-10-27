import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className='flex flex-col min-h-[700px] text-center justify-center items-center w-50 mx-auto mt-5'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div className='text-center'>
            <p className='text-danger'>{error.statusText || error.message}</p>
            <p className='text-danger'>{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage;