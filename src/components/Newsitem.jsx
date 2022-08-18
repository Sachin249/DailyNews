import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,imgurl,newsurl,author,date,source}=this.props
    return (
        <div className="card my-2" >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%'}}>
              {source}
            </span>
            <img src={imgurl?imgurl:"https://thumbs.dreamstime.com/b/news-network-mobile-device-89835976.jpg"} className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    )
  }
}

export default Newsitem