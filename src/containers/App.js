import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import News from '../components/News';
import { Card, CardHeader, CardBody } from "react-simple-card";


class App extends Component {

  constructor(props) {
    super(props);
    this.fetchTopNews = this.fetchTopNews.bind(this);
    this.fetchTechNews = this.fetchTechNews.bind(this);
    this.fetchSportsNews = this.fetchSportsNews.bind(this);
    this.fetchWorldNews = this.fetchWorldNews.bind(this);
  }

  componentWillMount() {
    this.props.actions.getByCategoryNews('tech');
    this.setState({header:'Tech News'});
  }

  fetchTopNews(){
    this.props.actions.getByCategoryNews('top');
    this.setState({header:'Top News'});
  }

  fetchTechNews(){
    this.props.actions.getByCategoryNews('tech');
    this.setState({header:'Tech News'});
  }

  fetchSportsNews(){
    this.props.actions.getByCategoryNews('sports');
    this.setState({header:'Sports News'});
  }

  fetchWorldNews(){
    this.props.actions.getByCategoryNews('world');
    this.setState({header:'World News'});
  }

  render() {
    let news=this.props.news;
    var divStyle = {
      fontSize:'30px',
      color:'black',
      paddingLeft:'40%'
    };
    var divStyle1 = {
      fontSize:'20px',
      color:'black',
    };
    return (
      <div className="row s12 m12 l12">
          <div className="col s2 m2 l2">
            <Card>
              <CardHeader style={divStyle1}className="head">Category</CardHeader>
              <CardBody>
                <div className="row s4 m4 l4" onClick={this.fetchTechNews}>
                  <a className="waves-effect waves-light" >Tech News</a>
                </div>
                <div className="row s4 m4 l4" onClick={this.fetchTopNews}>
                  <a className="waves-effect waves-light" >Top News</a>
                </div>
                <div className="row s4 m4 l4" onClick={this.fetchSportsNews}>
                  <a className="waves-effect waves-light" >Sports News</a>
                </div>
                <div className="row s4 m4 l4" onClick={this.fetchWorldNews}>
                  <a className="waves-effect waves-light" >World News</a>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col s8 m8 l8">
            <Card>
              <CardHeader style={divStyle}className="head">{this.state.header}</CardHeader>
              <CardBody>  
                <div className="app-content">
                    <div className="news-list">
                      {news.map(
                        (newsItem) =>  
                        <News  key={newsItem.id} {...newsItem} />
                      )}
                    </div>
                </div>
              </CardBody>
            </Card>
          </div>
        <div className="col s2 m2 l2">
        </div>
    </div>
    );
  }
}

let mapStateToProps = (state) => ({news: state.news});  
let mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(App);
