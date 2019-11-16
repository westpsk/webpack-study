'use strict';
import React, { Component } from 'react'
import { render } from 'react-dom'
import image from './images/zuolong.png'
import './search.less'

class Search extends Component {
  render(){
    return <div>
      search1
      <img src={image} />
    </div>;
  }
}

render(
  <Search />,
  document.getElementById('root')
)