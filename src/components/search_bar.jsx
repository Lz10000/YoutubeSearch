import React, {Component} from 'react';


class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render(){
		return (
			<div className="search-bar">
				<input 
				//setting value = to this.state.trem is turning it into a controlled component
				//its value only changes when state changes
				value={this.state.term}
				//onChange={event => this.setState({term: event.target.value})}/>
				onChange={event => this.onInputChange(event.target.value)}/>
			</div>	
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

/*
	render(){
		return <input onChange={event => console.log(event.target.value)} />;
	}

	this is shorten to the above
	 onInputChange(event){
	 	console.log(event.target.value);
	 }

*/


export default SearchBar; 

