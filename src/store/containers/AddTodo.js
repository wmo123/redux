import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
let AddTodo = (props) => {
  debugger
  /**
   * 为什么props中存在dispatch方法???
   * 猜测: 调用connect时注入的
   */
  let { dispatch } = props;
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(!input.value.trim()){
            return;
          }
          dispatch(addTodo(input.value));
          input.value = ''
        }}>
        <input
          ref={node => {
            input = node;
          }}></input>
          <button type="submit">
            Add Todo
          </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo);
export default AddTodo;