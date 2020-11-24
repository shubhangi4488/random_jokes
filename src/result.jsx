import React from "react";
import "./result.css";

class Result extends React.Component{
    render(){
        return(
            <div className="result">
                      {this.props.jokes}
            </div>
        )
    }
}

export default Result;