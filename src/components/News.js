import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
// let obj = {
//     title:"First News",
//     description:"this is description"
// }

export class News extends Component {
  static propTypes={

  }
  articles = []
  constructor()
  {
    super()
    console.log("This is Class Base Componet Then State Example")
    // this.setState(()=>{

    // })
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7bd0d87e9c15441bbb0b96e60fbab8da
    // console.log("This is Method is call render Method fIRST Call TheN call this method")
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7bd0d87e9c15441bbb0b96e60fbab8da&page=1&${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    // console.log(this.state.articles)
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults,
    })
  }

  handlpreinfo = async ()=>{

  
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7bd0d87e9c15441bbb0b96e60fbab8da&page=${this.state.page - 1}&${this.props.pageSize}`;
     let data = await fetch(url);
     let parseData = await data.json()
     this.setState({
      page:this.state.page - 1,
      articles:parseData.articles,
     })
    
     // console.log(this.state.articles)
  }

  handlnextinfo = async ()=>{
    // this.show = false



    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
    {
          // this.show = true
    }
    else{
      // https://newsapi.org/v2/everything?q=tesla&from=2023-12-20&sortBy=publishedAt&apiKey=API_KEY
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7bd0d87e9c15441bbb0b96e60fbab8da&page=${this.state.page + 1}&${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
     page:this.state.page + 1,
     articles:parseData.articles
    })
    // this.show = false
    }
  }

  render() {
   
    return (
      <div className="container">
        <h1>NewsApp -Top HeadLines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
               <NewsItem  title={element.title?element.title:""} description={element.description?element.description:"description"} 
               imageUrl={element.urlToImage?element.urlToImage:"logo192.png"} newUrl={element.url}/>
             </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlpreinfo} class="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}  type="button" onClick={this.handlnextinfo} class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
