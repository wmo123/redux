import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = () => {
  return (
    <div style={{width: '500px', height: '500px', margin: '30px auto'}}>
      <AddTodo></AddTodo>
      <VisibleTodoList></VisibleTodoList>
      <Footer></Footer>
    </div>
  )
}
export default App;