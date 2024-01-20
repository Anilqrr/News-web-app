import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newUrl}=this.props
   
    return (
      <>
      {/* {console.log(id)} */}
      <div>
      <div className={`card my-2`} style={{width: '18rem'}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {description}
            </p>
            <a href={newUrl} className="btn sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>
    )
  }
}
