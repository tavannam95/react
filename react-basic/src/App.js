import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/class-component/MyClassComponent';
import MyFunctionComponent from './components/function-component/MyFunctionComponent';
import ExampleRedux from './components/redux-component/ExampleRedux';

function App() {
  return (
    <div className='App'>
      {/* <h1>Functional</h1>
      <MyFunctionComponent></MyFunctionComponent> */}
      {/* <hr />
      <h1>Class</h1>
      <MyClassComponent></MyClassComponent> */}
      <ExampleRedux></ExampleRedux>
    </div>
  );
}

export default App;
