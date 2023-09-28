import React from 'react'
import { Routes, Route, Navigate } from 'react-router'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

import Voitures from '../pages/voitures/Index'

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
          {/* <Route path="/create" element={<VoitureCreate />} />
          <Route path="/edit" element={<VoitureEdit />} /> */}
        </Route>

        <Route path='404' element={<NotFound />} />
        <Route path="*" element={<Navigate to='404' replace />} />
    </Routes>
  )
}

export default MainRoutes