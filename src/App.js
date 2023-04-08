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

export const ThemeContext = createContext(null);

const App = () => {
      const [theme, setTheme] = useState("dark");
      
      const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
      }
      
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div className="App" id={theme} >

            
            <div className="columns is-gapless">
              <div className="column is-one-fifth">
                <LeftBar/>
              </div>
              <div className="centered-inside column">
                <Content/>
              </div>
            </div>
        </div>
      </ThemeContext.Provider>
      );

  };
  
export default App;


