import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figma from '../src/Components/Figma/Figma';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <div className="App">
        <Figma />
      </div>
    </ThemeProvider>
  );
}

export default App;
