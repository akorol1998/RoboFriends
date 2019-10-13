import React, {Component} from 'react'
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from "../components/ErrorBoundry"
import './App.css'
import Scroll from "../components/Scroll"

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
	console.log(state);
	return {
		searchField: state.searchRobots.searchField,
		isPanding: state.requestRobots.isPanding,
		robots:state.requestRobots.robots,
		error:state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {Blyat: (event) => dispatch(setSearchField(event.target.value)),
			onRequestRobots: () => dispatch(requestRobots())}
}

class App extends Component {
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
		const { searchField, Blyat, robots, isPanding } = this.props
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPanding
		? <h1> Loading </h1>
		:
		<div className='tc'>
			<h1 className='f1'>Robo friends</h1>
			<SearchBox searchChange={ Blyat }/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={ filteredRobots }/>
				</ErrorBoundry>
			</Scroll>
		</div>
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);