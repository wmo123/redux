import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.setVisibilityFilter
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      /**
       * 点击事件触发store派发setVisibilityFilter(这个action描述发生了什么, reducer会响应这个action, 根据action更新state)
       */
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;