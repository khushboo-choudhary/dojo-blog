import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom'
import BlogDetails from './components/BlogDetails'
import Create from './components/Create'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </div>
      </div>

    </>
  );
}

export default App;
