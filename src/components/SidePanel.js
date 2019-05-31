import React, { Component } from 'react';
import {NavLink} from "react-router-dom"


const LinkButton  = ({to, label}) => {
  return (
    <div className="link-button">
      <NavLink to={`/${to}`} activeClassName="active">{label}</NavLink>
    </div>
  )
}
export default class SidePanel extends Component {
  render() {
    return (
      <div className='side-panel'>
        <LinkButton to="abstract" label="Abstract"/>
        <LinkButton to="figurative" label="Figurative"/>
        <LinkButton to="about" label="About"/>
      </div>
    )
  }
}