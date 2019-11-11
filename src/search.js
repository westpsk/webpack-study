import React, { Component } from "react"
import ReactDom from "react-dom"
import image from './images/zuolong.png'
import './search.less'

class Search extends Component {
  render(){
    return (
      <div>
        search1
        <img src={image}/ >
      </div>
    )
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
)