import {FETCH_NEWS_CATEGORY_SUCCESS, FETCH_NEWS_ERROR,FETCH_TOP_NEWS_SUCCESS,FETCH_SPORTS_NEWS_SUCCESS,FETCH_WORLD_NEWS_SUCCESS} from '../constants/ActionTypes';

export default function news(state = [], action) {
	let newState = [...state];
	switch (action.type) {
		case FETCH_NEWS_CATEGORY_SUCCESS:
			newState = [...action.news];
			break;
		case FETCH_NEWS_ERROR:
			break;
		default: 
			break;
	}
	return newState;
}


