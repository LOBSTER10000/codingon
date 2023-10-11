import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SaasComponent';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <h2>Css Module</h2>
      <CssModuleComponents />

      <h2>SASS</h2>
      <SassComponent />
    </div>
  );
}

export default App;
