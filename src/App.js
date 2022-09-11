
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'               // <-- here we are using " loading Bar" package. in this loading bar we can show progress og loading page from 0 to 100 on the top of page .    when data showing, on that time we show Loading bar    



export default class App extends Component {
  pageSize =10;
  apiKey = process.env.REACT_APP_SECRET_API   // <-- this is variable we call from .env.local file, whenever you want hidden your key you can use this type of variale 

  state ={              
    progress : 0 
   }    
  setProgress = (progress)=>{
    this.setState({progress: progress})      // <-- here we make method for progress loading bar  
  }

  render() {
  
    return (
      
      <div>
         <Router>            {/*      <-- here we used router */}

          <NavBar />            {/*      <-- THis is navbar component, here we called it  in router */}

          <LoadingBar      // <-- here we call Loading bar with properties 
        color='#f11946'   // <-- this property will change colour of Loading bar
        height={4}        // <-- this is belong to thickness of loading bar
        progress={this.state.progress}  // here we show progress of loading bar , this progress will change when data loading .
      
      />



          <Routes>
                        {/* here we used proper routing.
                        1. in this routing we used "EXACT" is using for call exect component.
                        2. in "PATH" we declare, which name to calling component 
                        3. in "ELEMENT" we write whole component. then we call from "ROUTE"
                        4  whenever we need to show or print different types of data on same component on every click from api or other resource, we use "KEY" . we see that component is same but all "KEYs" are different.
                        5. pageSize , country and category are props    */}


            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/Sport" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />

          </Routes>
        </Router>


      </div >
    )
  }
}
