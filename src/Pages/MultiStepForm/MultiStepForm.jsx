import React from 'react'
import RegFormProvider from './providers/RegFormProvider'
import Progress from './components/Progress'
import { Outlet } from 'react-router-dom'
import ProfileCard from './components/ProfileCard'

const MultiStepForm = () => {
  return (

    <RegFormProvider>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-7">
            <Progress/>
            <Outlet/>
          </div>
          <div className="col-12 col-md-5">
            <ProfileCard />
          </div>
        </div>
      </div>
    </RegFormProvider>

  )
}

export default MultiStepForm
