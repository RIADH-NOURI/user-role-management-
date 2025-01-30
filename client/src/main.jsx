import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/stores/userRoleStore';
import { Provider } from 'react-redux';
import App from './App';
import Sidebar from './components/organisms/sideBar';
import './globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <App />
          </div>
        </div>
      </Router>
    </Provider>
  </StrictMode>
);
