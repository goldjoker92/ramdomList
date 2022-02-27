import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './componets/home';
import Edit from './componets/edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
