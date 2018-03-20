import React from 'react';

export default class News extends React.Component {
	constructor(props) {
	    super(props);
	    this.contentData={};
	    this.state={flag:'false'};
		this.displayFullNews = this.displayFullNews.bind(this);
		}
	displayFullNews(){
		if(this.state.flag === 'true'){
			this.setState({
				flag:'false'
			});
		}else{
			this.setState({
				flag:'true'
			});
		}
		console.log(this.state);
	}
	render() {
		let { title, content, image,author,link } = this.props;
		var divStyle={
			wordWrap:'break-word'
		};
		var divStyleAuthor={
			fontSize:'15px',
			paddingLeft:'50%'
		};
		var a=this.props.content.plain;
		var scontent=a.substr(0,200)+'...';
		if(this.state.flag === 'true'){
			return (
				<div className="cardlayout">
				<div className="row s1 m1 l1">
				</div>
				<div className="row s10 m10 l10">
					<div className="col s4 m4 l4">
						<img  className="imge"src={image} alt="" />
					</div>
					<div className="col s8 m8 l8">
						<div className="row s2 m2 l2 heading">
							{title}
						</div>
						<div >
							<a href={link}>{link}</a>
						</div>
						<div>
							<a class="waves-effect waves-light btn" onClick={this.displayFullNews}>View Full News</a>
						</div>
						<div style={divStyle}className="row s9 m9 l9">
							{content.plain}
						</div>
						<div style={divStyleAuthor}>
							Author:{author}
						</div>
					</div>
				</div>
				<div className="row s1 m1 l1">
				</div>
				</div>
			);	
		}else{
			return (
				<div className="cardlayout">
				<div className="row s1 m1 l1">
				</div>
				<div className="row s10 m10 l10">
					<div className="col s4 m4 l4">
						<img  className="imge"src={image} alt="" />
					</div>
					<div className="col s8 m8 l8">
						<div className="row s1 m1 l2 heading">
							{title}
						</div>
						<div className="row s1 m1 l1">
							<a href={link}>{link}</a>
						</div>
						<div style={divStyle}className="row s10 m10 l10">
							{scontent}
						</div>
						<div className="row s1 m1 l1 btn1">
							<a class="waves-effect waves-light btn" onClick={this.displayFullNews}>View Full News</a>
						</div>
						<div style={divStyleAuthor}>
							Author:{author}
						</div>
					</div>
				</div>
				<div className="row s1 m1 l1">
				</div>
				</div>
			);
		}
	}
}
