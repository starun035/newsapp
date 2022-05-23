import React from 'react';

export class NewsItem extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="card" style={{width: '18rem'}}>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{zIndex: '1'}}>
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">By {author ? author : "unknown"} On {new Date(date).toGMTString()}</p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        );
    }
}