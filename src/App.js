/* Oto główny plik aplikacji */
/* Importuję komponenty contentu i leftbaru
całe stylizowanie jest wykonane przy użyciu klas z bulmy - tabele, inputy
dodatkowo, importuję zewnętrzny plik css i dodatkowo modyfikuję co potrzeba*/

import LeftBar from './components/LeftBar';
import Content from './components/Content';
import 'bulma/css/bulma.min.css';
import './styleapp.css';

const App = () => {
      return (
        <div className="columns is-gapless">
          <div className="column is-one-fifth">
            <LeftBar/>
          </div>
          <div className="centered-inside column">
            <Content/>
          </div>
      </div>
      )

  }
  
export default App;


