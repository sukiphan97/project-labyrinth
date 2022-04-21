import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import BG1 from './img/bg1.png'

import game, { fetchGame } from '../reducer/game'

const ConsoleContent = styled.section`
	background: #fff;
	height: 472px;
	width: 93%;
	border-radius: 10px;
	border: 2px solid;
`
const GameText = styled.p`
	font-size: 16px;
	color: #fff;
`
const UsernameInput = styled.input`
	height: 25px;
	font-family: inherit;
`
const UsernameInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1em;
	border-radius: 6px;
	justify-content: center;
	background: url(${BG1});
	background-size: cover;
	height: 100%;
`

const Game = () => {
	const [userName, setUserName] = useState('')

	const dispatch = useDispatch()
	console.log('username', userName)

	const onInputUserName = (event) => {
		event.preventDefault()
		setUserName(event.target.value)
	}

	const onChangeUserName = () => {
		dispatch(game.actions.setName(userName))
		setUserName('')
		dispatch(fetchGame())
	}

	return (
		<ConsoleContent>
			<GameText>Welcome to the a-maze-ing 80's! Try to found your way out of the labyrinth!</GameText>
			<UsernameInputContainer>
				<UsernameInput
					type='text'
					value={userName}
					onChange={onInputUserName}
					onKeyDown={(e) => e.key === 'Enter' && onChangeUserName()}
				/>
				<button onClick={onChangeUserName} disabled={userName.length === 0}>
					Start
				</button>
			</UsernameInputContainer>
		</ConsoleContent>
	)
}

export default Game
