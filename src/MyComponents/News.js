import React, { Component } from "react";
import NewItems from "./NewItems";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-12&sortBy=publishedAt&apiKey=04296cd208c9442e9b9c1f1a8e02dc77&page=1&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalSize: parseData.totalResults,
      page: 1,
    });
  }
  prevPage = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-12&sortBy=publishedAt&apiKey=04296cd208c9442e9b9c1f1a8e02dc77&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
    });
  };
  nextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalSize / 20)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-12&sortBy=publishedAt&apiKey=04296cd208c9442e9b9c1f1a8e02dc77&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <div className="container my-4">
        <h3 style={{ position: "relative", left: "40%" }}>Today's Headlines</h3>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              element.title &&
              element.description &&
              element.urlToImage !== null &&
              element.url && (
                <div className="col-md-4 my-4">
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
            class="btn btn-primary"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={((this.state.totalSize) / 20) === this.state.page}
            onClick={this.nextPage}
            class="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
