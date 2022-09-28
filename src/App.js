import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Search from "./components/searchbar/searchbar";
import { firstCall, searchCall } from "./services";
import Cards from "./components/cards/card";
import List from "./components/list/list";

// function App() {

//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
    };
   
  }

  onSearch = (value) => {
    this.setState({ search: value });
   
      searchCall(value)
        .then((res) => {
          console.log(res[1].title)
         
         
            this.setState({ data: res });
          
        })
        .catch((err) => {
          console.log(err);
        });
    
  };
 
  

  componentDidMount() {
    firstCall()
      .then((res) => {
        this.setState({ data: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
   
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <Search search={this.state.search} onSearch={this.onSearch} />

        <List list={this.state.data} />
      </div>
    );
  }
}
export default App;
