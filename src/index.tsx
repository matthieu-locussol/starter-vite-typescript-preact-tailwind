import { render } from 'react-dom';
import { App } from './App';
import './styles/index.css';

try {
   const root = document.getElementById('root');
   render(<App />, root);
} catch (error) {
   throw new Error('Could not find root element');
}
