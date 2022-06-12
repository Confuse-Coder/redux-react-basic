import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { increaseCounter, decreaseCounter } from './action/actions';
import { useEffect } from 'react';
import Home from './components/Home';

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => state.counter.count);

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  const fetchAllUsers = async () => {
    const res = await axios.get('http://localhost:8080/users/all');
    const data = res && res.data ? res.data : [];
    console.log('check data>>>>', data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and Hoi Dan IT!</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
