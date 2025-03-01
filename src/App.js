import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment ,decrement} from './Redux/slices/counterSlice';


function App() {
  const abc = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  //const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());  
  return (
    <div className="App">
      <h1>{abc.value}</h1>
      <button onClick={(e)=>dispatch(increment(5))}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
     <hr></hr>
   
    </div>
    
  );
}

export default App;
