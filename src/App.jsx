//css
import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import All from './pages/All'
import Asia from './pages/Asia'
import Europe from './pages/Europe'
import Desert from './pages/Desert'
import PageNotFound from './component/PageNotFound'
import FullAbout from './component/FullAbout'
import AsianLayout from './layout/AsianLayout'
import EuropeLayout from './layout/EuropeLayout'
import DesertLayout from './layout/DesertLayout'


function App() {

   const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
         <Route index element={<All/>}/>
         <Route path='asia' element={<AsianLayout/>}>
            <Route index element={<Asia/>} />
            <Route path=':id' element={<FullAbout/>} />
         </Route>
         <Route path='europe' element={<EuropeLayout/>}>
            <Route index element={<Europe/>}/>
            <Route path=':id' element={<FullAbout/>}/>
         </Route>
         <Route path='desert' element={<DesertLayout/>}>
            <Route index element={<Desert/>}/>
            <Route path=':id' element={<FullAbout/>}/>
         </Route>
         <Route path='*' element={<PageNotFound/>}/> 
      </Route>
    )
   )


  return (
    <>
    <RouterProvider router={routes} />      
    </>
  )
}

export default App
