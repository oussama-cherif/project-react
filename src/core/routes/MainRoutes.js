import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { UserContext } from '../context/UserContext'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Voitures from '../pages/voitures/Index'
import CreateVoitureForm from '../pages/voitures/CreateVoitureForm'
import EditVoitureForm from '../pages/voitures/EditVoitureForm'
import CarsByBrand from '../pages/marque_voitures/CarsByBrand'
import Login from '../pages/auth/Login'

import ProtectedRoute from '../components/security/ProtectedRoute'


const MainRoutes = () => {
  const [user] = useContext(UserContext)

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voitures">
          <Route index element={<Voitures />} />

          <Route path="create" element={
            <ProtectedRoute user={user} redirectTo="/">
              <CreateVoitureForm />
            </ProtectedRoute>
          } /> 

          <Route path="edit/:carId" element={
            <ProtectedRoute user={user} redirectTo="/">
              <EditVoitureForm />
            </ProtectedRoute>
          } /> 
        </Route>

        <Route path="/marques">
          <Route index element={<Home />} />
          <Route path=":id" element={<CarsByBrand />} />
        </Route>

        <Route path="/login">
          <Route index element={<Login />} />
          <Route path=":id" element={<Login />} />
        </Route>

        <Route path='404' element={<NotFound />} />
        <Route path="*" element={<Navigate to='404' replace />} />
    </Routes>
  )
}

export default MainRoutes