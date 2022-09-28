import React, { Component }  from "react";
import Cards from "../cards/card";


class List extends Component{
    constructor(props){
        super(props);
    }
      


    render(){

        return(
            <div className="container">
                {this.props.list.length!=0 &&  ( this.props.list.map((i)=>{
                    
                    return <Cards  key={i.id}data={i} />
                  }))
                 
                }
            </div>
           
        )
    }
}

export default List;