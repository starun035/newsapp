import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect} from 'react';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1); // this is asynchronous
  }

  const fetchMoreData = async () => {
    updateNews();
  }

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <h2 className='text-center' style={{marginTop: '70px'}}>Top Headlines for the Day</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Loader />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return <div className='col md-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  category: "general",
  apiKey: "",
  pageSize: 12,
}

News.propTypes = {
  category: PropTypes.string,
  apiKey: PropTypes.string,
  pageSize: PropTypes.number,
}

export default News;