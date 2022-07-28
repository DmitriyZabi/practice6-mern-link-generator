import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { DetailPage } from './pages/DetailPage'
import { CreatePage } from './pages/CreatePage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/links" element={<LinksPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/*" element={<Navigate replace to="/create" />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

/*
        {/* <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Navigate to="/create" /> 

         <Routes>
      <Route path="/">
        <AuthPage />
      </Route>
      <Navigate to="/" replace={true} />
    </Routes>

        ///+++++++++++++++++++++++++++++++++++++++++/
<Routes>
                <Route exact path="/links"  element={<LinksPage />}>
                </Route>


                <Route exact path="/create"  element={<CreatePage />} >
                </Route>


                <Route exact path="/detail/:id"   element={<DetailPage />}>
                </Route>


                <Route path="" element={<Navigate to="/create" />}>
                </Route>
</Routes>
*/
