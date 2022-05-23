import React from 'react';
import { NewsItem } from './NewsItem';
import { Loader } from './Loader';

export class News extends React.Component {
  constructor() {
    super();
    console.log('in constructor');
    this.state = {
      API_KEY: '3172980fe9dc4b1c9fe49206633d8b15',
      articles: [],
      page: 1,
      loading: true
    };
  }
  async updateNews() {
    console.log('in cdm');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }
  handlePreviousClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }
  render() {
    console.log('in render');
    return (
      <div className='container my-2'>
        <h2 className='text-center'>Top Headlines for the Day</h2>
        {this.state.loading && <Loader />}
        <div className='row my-2'>
          {!this.state.loading && this.state.articles.map((element)=> {
            return <div className='col md-3' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize) <= this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>

      </div>
    );
  }
}