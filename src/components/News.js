import React from 'react';
import { NewsItem } from './NewsItem';
import { Loader } from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends React.Component {
  constructor() {
    super();
    console.log('in constructor');
    this.state = {
      API_KEY: '3172980fe9dc4b1c9fe49206633d8b15',
      articles: [],
      page: 1,
      loading: true,
      totalResults: 1,
    };
  }
  async updateNews() {
    console.log('in cdm');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  async componentDidMount() {
    console.log('component did mount');
    this.updateNews();
  }

  render() {
    return (
      <div className='container my-2'>
        <h2 className='text-center'>Top Headlines for the Day</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Loader />}
        >
          <div className='row my-2'>
            {this.state.articles.map((element) => {
              return <div className='col md-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}