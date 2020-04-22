import React, {Component} from "react";
import './App.css';
import axios from 'axios';

class Navbar extends Component {

    state = {
        googleArticles: [0],

    };
    intervalID;
    componentDidMount = () => {
        this.getArticles();
    };
    componentWillUnmount() {

        clearTimeout(this.intervalID);
    }
    getArticles = () => {
        console.log("Fetching News");
        axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=78fcfa91c1664bd0828c5d064347cbb9\n' +
            '\n')
            .then(
                res => {
                    console.log(res.data.articles);
                    this.setState({ googleArticles: this.state.googleArticles.concat(res.data.articles).splice(1, 5) });
                    this.intervalID = setTimeout(this.getArticles.bind(this), 5000);
                }
            )
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                <h1>Google News</h1>
                {this.state.googleArticles.map((article, i) =>
                    <div>
                        <p>{i + 1}) {article.title}</p>
                    </div>
                )}

            </div>



        )
    }
}

export default Navbar;
