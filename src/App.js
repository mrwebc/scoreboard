import React from 'react'
import './App.css'

const Header = props => {
	const title = props.title
	const totalplayers = props.totalplayers

	return (
		<header className="header">
			<h1 className={title}>Score 보드</h1>
			<span className="stats">플레이어 : {totalplayers}</span>
		</header>
	)
}

class Counter extends React.Component {
	state = {
		score: 57
	}

	//리액트 이벤트는 선언형 스타일 : 함수 선언문을 우측에 배치
	increment = () => {
		this.setState(preState => {
			return {
				score: preState.score + 1
			}
		})
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.increment}>
					-
				</button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}>
					+
				</button>
			</div>
		)
	}
}

const Player = ({ name, score, id, removePlayer }) => {
	return (
		<div className="player">
			<span className="player-name">
				{name}{' '}
				<button
					onClick={() => {
						removePlayer(id)
					}}
					className="remove-player"
				>
					X
				</button>
			</span>
			<Counter score={score} />
		</div>
	)
}

class App extends React.Component {
	state = {
		players: [
			{ name: 'LDK', score: 30, id: 1 },
			{ name: 'HONG', score: 40, id: 2 },
			{ name: 'KIM', score: 50, id: 3 },
			{ name: 'PARK', score: 60, id: 4 }
		]
	}

	handleRemovePlayer = id => {
		console.log('id=', id)

		this.setState(prevState => ({
			players: prevState.players.filter(player => {
				return player.id !== id
			})
		}))
	}

	render() {
		return (
			<div className="scoreboard">
				<Header title="My Scoreboard" totalplayers={11} />

				{this.state.players.map(player => {
					return (
						<Player
							removePlayer={this.handleRemovePlayer}
							name={player.name}
							score={player.score}
							id={player.id}
							key={player.id}
						/>
					)
				})}
			</div>
		)
	}
}

export default App
