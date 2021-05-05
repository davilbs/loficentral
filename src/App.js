import './App.css';

import ListRadios from './components/ListRadios';
import CurrentRadio from './components/CurrentRadio';

function App() {
  let page = <CurrentRadio />
  if (window.location.pathname === '/list') {
    page = <ListRadios />
  }
  return page
}

export default App;
