import React from 'react';
import { NewsItem } from './NewsItem';

export class News extends React.Component {
  constructor() {
    super();
    console.log('in constructor');
    this.state = {
      articles: [],
      page: 1,
      articlesOnPage: 20,
      loading: false
    };
  }
  async componentDidMount() {
    console.log('in cdm');
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3172980fe9dc4b1c9fe49206633d8b15';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  handleNextClick = async () => {
    console.log('next clicked');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3172980fe9dc4b1c9fe49206633d8b15&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    });
  }
  handlePreviousClick = async () => {
    console.log('prev clicked');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3172980fe9dc4b1c9fe49206633d8b15&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  }
  render() {
    console.log('in render');
    return (
      <div className='container my-2'>
        <h2>Top Headlines for the Day</h2>
        <div className='row my-2'>
          {this.state.articles.map((element)=> {
            return <div className='col md-3' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResults/this.state.articlesOnPage) <= this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>

      </div>
    );
  }
}