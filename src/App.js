import Counter from './components/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/index';
import Theme from './components/Theme';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Theme/>
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
