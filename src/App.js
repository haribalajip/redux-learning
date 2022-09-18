import Counter from './components/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
