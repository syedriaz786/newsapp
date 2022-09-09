import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'




export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'entertainment'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    // this data use for locally fetch data

    // articles =[  


    //     {
    //     "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //     },
    //     "author": "Miriam Berger",
    //     "title": "Ukraine military chief says 'limited' nuclear war cannot be ruled out - The Washington Post",
    //     "description": "In an article for Ukraine's state news agency, army chief Valeriy Zaluzhnyi acknowledged that his forces were behind strikes on Russian bases in Crimea last month.",
    //     "url": "https://www.washingtonpost.com/world/2022/09/07/ukraine-russia-nuclear-attacks-crimea/",
    //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TT2ZVHQ4WUI63HHGNASTXUYYMQ.jpg&w=1440",
    //     "publishedAt": "2022-09-08T00:04:00Z",
    //     "content": "Ukraines top military chief warned Wednesday that a limited nuclear war between Russia and the Westcannot be discounted, a scenario with grave global implications.\r\nThere is a direct threat of the us… [+3487 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "San Francisco Chronicle"
    //     },
    //     "author": "Jessica Flores, Claire Hao",
    //     "title": "California heat wave: Several Bay Area cities needlessly cut power to thousands of homes - San Francisco Chronicle",
    //     "description": "Some Northern California cities instituted blackouts on Tuesday in error after an...",
    //     "url": "https://www.sfchronicle.com/bayarea/article/California-heat-wave-3-Bay-Area-cities-may-have-17424634.php",
    //     "urlToImage": "https://s.hdnux.com/photos/01/27/26/06/22897050/15/rawImage.jpg",
    //     "publishedAt": "2022-09-07T23:47:10Z",
    //     "content": "As Californias grid operator braced for another day of extreme demand on Thursday due to the historic heat wave, officials vowed to communicate better to avoid accidental outages that affected thousa… [+7150 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "fox-news",
    //     "name": "Fox News"
    //     },
    //     "author": "Lori Bashian",
    //     "title": "‘Ticket to Paradise’ star Julia Roberts pays tribute to her family at movie premiere with sentimental dress - Fox News",
    //     "description": "Julia Roberts hit the \"Ticket to Paradise\" premiere red carpet in a dress which paid tribute to her family. She walked the carpet with her friend and co-star George Clooney.",
    //     "url": "https://www.foxnews.com/entertainment/julia-roberts-pays-tribute-family-ticket-paradise-premiere-dress",
    //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Julia-Roberts-1.jpg",
    //     "publishedAt": "2022-09-07T23:18:23Z",
    //     "content": "Julia Roberts made a statement at the \"Ticket to Paradise\" London premiere on Wednesday, wearing a dress with designs meaningful to her and her family. \r\nThe actress wore a black Alexander McQueen dr… [+3279 chars]"
    //     }
    //     ]


    constructor() {                         // <-- when we use class component we use constructor 
        super();                          // <-- its important to use "super" with constructor otherwise react will gives error. 
        // console.log("constructor");
        this.state = {
            articles: [],          // <-- in class that processor we use to define state  
            loading: false,
            page: 1,


        }
    }

    async componentDidMount() {
        // console.log("componentdidmount");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76b6b9fbcf094e69ba66b3f3e4d58ba4&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePreviousClick = async () => {
        console.log("previous");
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76b6b9fbcf094e69ba66b3f3e4d58ba4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }


    handleNextClick = async () => {
        console.log("next");
        this.setState({ loading: true })
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76b6b9fbcf094e69ba66b3f3e4d58ba4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })

        }
    }



    render() {
        // console.log("render")
        return (

            <div className="container my-3">
                <h2>Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className="col-md-3 mx-3 my-4" key={element.url}>

                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}> &larr; previous</button>

                        <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default News