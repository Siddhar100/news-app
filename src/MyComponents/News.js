import React, { Component } from "react";
import NewItems from "./NewItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  static defaultProps = {};
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${process.env.API_KEY}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalSize: parseData.totalResults,
      page: 1,
      loading: false,
    });
  }
  prevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=04296cd208c9442e9b9c1f1a8e02dc77&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  nextPage = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalSize / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
        this.props.category
      }&apiKey=04296cd208c9442e9b9c1f1a8e02dc77&apiKey=04296cd208c9442e9b9c1f1a8e02dc77&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container my-4">
        <h3 style={{ position: "relative", left: "40%" }}>Today's Headlines</h3>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {this.state.articles?.map((element,index) => {
            return (
              element.title &&
              element.description &&
              element.urlToImage !== null &&
              element.url && (
                <div className="col-md-4 my-4" key={index}>
                  <NewItems
                    key={element.url}
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 80)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              )
            );
          })}
        </div>
        <div class="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.prevPage}
            className="btn btn-primary"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.totalSize / this.props.pageSize < this.state.page + 1
            }
            onClick={this.nextPage}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
