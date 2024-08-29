import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import BrowsBook from './components/BrowsBook.jsx'
import AddBooks from './components/AddBooks.jsx'
import ErrorPath from './components/common/ErrorPath.jsx'
import BookDetails from './components/BookDetails.jsx'
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPath/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/browse-books/:categoyId?",
        element:<BrowsBook/>
      },
      {
        path:"/book-details/:bookId",
        element:<BookDetails/>
      },
      {
        path:"/add-books",
        element:<AddBooks/>
      },
     
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={appRouter}/>
  </StrictMode>,
)
