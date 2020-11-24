import React from "react";
import "./jokeform.css";
import Result from "./result";

class Jokeform extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:[]
        }
    }

    

    fetchAPI = (e) => {
        e.preventDefault();
        fetch("https://joke3.p.rapidapi.com/v1/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "02d7ad0637msh78eacd926d805d8p1a3553jsn22f064c4caca",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	}
})
.then(response => {
    return response.json();
	
})
.then(data=>{
    this.setState({result:[data]})
    console.log(data);
})
.catch(err => {
	console.error(err);
});
}
    render(){
        const resultjsx = this.state.result.map(item => (<Result jokes={item.content}/>));
        return(
            <div className="container">
                
                {resultjsx}
                
                <button onClick={this.fetchAPI}>Random Jokes</button>
            </div>

        )
    }
}

export default Jokeform;