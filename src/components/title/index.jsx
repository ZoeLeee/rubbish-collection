import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Carousel, WingBlank,Icon } from 'antd-mobile';

export default class TitleComponent extends Component {
  render() {
    // {dada:[{url:string,icon:string,title:string}]}
    const { data } = this.props;

    return (
      <div className="flex-ar title">
        {
          data.map(d =>
            <Link to={d.url} key={d.title} >
              <Icon type={d.icon} color="#3CA53B" />
              <div>{d.title}</div>
            </Link>)
        }
      </div>
    )
  }
}
