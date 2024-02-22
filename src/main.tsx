import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './features/dashboard/Dashbaord.tsx'
import Song from './features/song/Song.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true,element:<Dashboard/>},
      {
        path:'/songs',
        element:<Song/>
      },
    ]
  },
 
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
