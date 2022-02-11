import logo from './logo.svg';
import './assets/css/App.css';

import TableHouse from './components/TableHouse';
import FormHouse from './components/FormHouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="col-md-10 containt-house"> 
          <h4 className="title-house">Houses</h4>
          <hr className="title-house-hr"></hr>
          <div className="divForm">
            <FormHouse/>
          </div>
          <hr className="title-house-hr"></hr>
          <div className="divTable">
            <TableHouse/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
