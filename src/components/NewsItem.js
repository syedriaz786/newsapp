import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
      <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107111555-NYSE-Trading-Floor-Photo-220830-CC-PRESS-8.jpg?v=1661888655&w=1920&h=1080" : imageUrl } className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
      </div>
    </div>
    </>
    )
  }
}

export default NewsItem