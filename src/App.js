
import { RouterProvider } from 'react-router-dom';
import router from './routers/Router';
import './App.css';
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
