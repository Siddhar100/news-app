import React, { Component } from "react";
import NewItems from "./NewItems";

export default class News extends Component {
  articles = []
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-12&sortBy=publishedAt&apiKey=04296cd208c9442e9b9c1f1a8e02dc77"
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles});
  }
  render() {
    return (
      <div className="container my-4">
        <h3 style={{ position: "relative", left: "40%" }}>Today's Headlines</h3>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
            element.title && element.description && element.urlToImage !== null && element.url && <div className="col-md-4 my-4">
                <NewItems key={element.url} title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
