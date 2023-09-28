import React from 'react'
import { Routes, Route, Navigate } from 'react-router'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

import Voitures from '../pages/voitures/Index'
import BrandList from '../pages/marques/BrandList'
import CreateVoitureForm from '../pages/voitures/CreateVoitureForm'
import EditVoitureForm from '../pages/voitures/EditVoitureForm'
import CarsByBrand from '../pages/marque_voitures/CarsByBrand'
import Login from '../pages/auth/Login'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />}/>
        <Route path='/marques' >
            <Route index  element={<Marque />} />
            <Route path="/:id" element={<MarqueDetail />} />
        </Route> */}
        <Route path="/voitures">
          <Route index element={<Voitures />} />
          <Route path="create" element={<CreateVoitureForm />} />
          <Route path="edit/:carId" element={<EditVoitureForm />} />
        </Route>

        <Route path="/marques">
          <Route index element={<BrandList />} />
          <Route path=":id" element={<CarsByBrand />} />
          {/* <Route path="/create" element={<VoitureCreate />} />
          <Route path="/edit" element={<VoitureEdit />} /> */}
        </Route>

        <Route path="/login">
          <Route index element={<Login />} />
          <Route path=":id" element={<Login />} />
          {/* <Route path="/create" element={<VoitureCreate />} />
          <Route path="/edit" element={<VoitureEdit />} /> */}
        </Route>

        <Route path='404' element={<NotFound />} />
        <Route path="*" element={<Navigate to='404' replace />} />
    </Routes>
  )
}

export default MainRoutes