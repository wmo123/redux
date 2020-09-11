import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <p>
    展示
    {':'}
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    {','}
    <FilterLink filter="SHOW_ACTIVE">active</FilterLink>
    {','}
    <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
  </p>
);

export default Footer;  