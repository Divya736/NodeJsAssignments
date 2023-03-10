

import './App.css';
import Login from './Component/Login';
import Registration from './Component/Registration';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Password from './Component/Password';
import Post from './Component/List/Post';
import ToDo from './Component/List/ToDos';
const router= createBrowserRouter([
  {path:'/',element:<Login/> },
  {path:'/register',element:<Registration/> },
  {path:'/dashboard',element:<Dashboard/> },
  {path:'/password',element:<Password/> },
  {path:'/post',element:<Post/>},
  {path:'/todo',element:<ToDo/>},
])
function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
