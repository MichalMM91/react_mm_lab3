/* Oto główny plik aplikacji */
/* Importuję komponenty contentu i leftbaru
całe stylizowanie jest wykonane przy użyciu klas z bulmy - tabele, inputy
dodatkowo, importuję zewnętrzny plik css i dodatkowo modyfikuję co potrzeba*/

import LeftBar from './components/LeftBar';
import Content from './components/Content';
import 'bulma/css/bulma.min.css';
import './styleapp.css';
import { createContext } from 'react';
import {useState} from 'react';
import './components/style.css';
import ReactSwitch from 'react-switch';
import FontSizeChanger from 'react-font-size-changer';
import { Icon } from '@iconify/react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Layouts from './components/Layouts';

import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

export const ThemeContext = createContext(null);

const App = () => {
      
      const user = sessionStorage.getItem("uid");
  
      const [theme, setTheme] = useState("dark");
      
      const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
      }
      
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div className="App" id={theme} >
        <Router>
            <div className="columns is-gapless">
              <div className="column is-one-fifth">
                <LeftBar/>
                
                <hr className='horizontal-line'></hr>
                <div className="switch rows">
                  <div className="row">
                    <label> {theme === "light" ? "Day mode" : "Night Mode"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                  </div>
                  <div>  
                    <label>Adjust font size</label>
                    <FontSizeChanger
                      targets={['.App']}
                      options={{
                        stepSize: 1,
                        range: 4
                      }}
                    customButtons={{
                      up: <Icon id="icon" icon="material-symbols:text-increase" />,
                      down: <Icon id="icon" icon="material-symbols:text-decrease" />,
                      style: {
                        WebkitBorderRadius: '10px',
                        width: '50px',
                        height: '35px',
                        border: 0,
                      },
                      buttonsMargin: 5}}/>
                      
                    </div>
                </div>
              </div>
              <div className="centered-inside column">
                  
                      <Routes>
                      <Route exact path="/login" Component={LoginPage} />
                        <Route
                        exact
                        path="/dashboard"
                        element={
                          <PrivateRoute user={user}>
                            
                            <Content />
                          </PrivateRoute>
                        }
                  />
                  <Route
                    exact
                    path="/layouts"
                    element={
                      <PrivateRoute user={user}>
                        <Layouts />
                      </PrivateRoute>
                    }
                  />
                      
                      <Route  path="/" element={<Navigate to="/dashboard" replace />} />
                      <Route  path="*" element={<Navigate to="/dashboard" replace />} />
                    
                    </Routes>
              </div>
            </div>
            
            </Router>
            
        </div>
        
      </ThemeContext.Provider>
      );

  };
  
export default App;


