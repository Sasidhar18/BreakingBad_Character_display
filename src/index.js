import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Api/Reducer'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

