import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReducerActions } from '../../stores/reducers/reducer';

import './styles.css';

const Main = () => {
	const state = useSelector((state) => state.reducer);
	const dispatch = useDispatch();

	function handleTranslate() {
		dispatch(ReducerActions.translateMsg());
	}

	return (
		<div className="container">
			<p>{state.msg}</p>
			<button className="btn" onClick={handleTranslate}>
				Traduzir
			</button>
		</div>
	);
};

export default Main;