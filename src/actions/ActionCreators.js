import {
		FETCH_NEWS_SUCCESS,
		FETCH_NEWS_ERROR,
		FETCH_TOP_NEWS_SUCCESS,
		FETCH_TOP_NEWS_ERROR,
		FETCH_SPORTS_NEWS_SUCCESS,
		FETCH_SPORTS_NEWS_ERROR,
		FETCH_WORLD_NEWS_SUCCESS,
		FETCH_WORLD_NEWS_ERROR
}from '../constants/ActionTypes';


export function getNews() {
	return (dispatch) => fetchNews().then(
				(news) => dispatch( {type: FETCH_NEWS_SUCCESS, news} ), 
				(error) => dispatch( {type: FETCH_NEWS_ERROR, message: error} )
	);
}

export function getTopNews() {
	return (dispatch) => fetchTopNews().then(
				(news) => dispatch( {type: FETCH_TOP_NEWS_SUCCESS, news} ), 
				(error) => dispatch( {type: FETCH_TOP_NEWS_ERROR, message: error} )
	);
}

export function getSportsNews() {
	return (dispatch) => fetchSportsNews().then(
				(news) => dispatch( {type: FETCH_SPORTS_NEWS_SUCCESS, news} ), 
				(error) => dispatch( {type: FETCH_SPORTS_NEWS_ERROR, message: error} )
	);
}

export function getWorldNews() {
	return (dispatch) => fetchWorldNews().then(
				(news) => dispatch( {type: FETCH_WORLD_NEWS_SUCCESS, news} ), 
				(error) => dispatch( {type: FETCH_WORLD_NEWS_ERROR, message: error} )
	);
}

function fetchNews() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).new);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', 'https://mashable.com/stories.json/?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=tech&new_after=1Dvhfi',false);
	    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	    xhr.send();
	});
}

function fetchTopNews() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).new);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', 'https://mashable.com/stories.json/?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=top&new_after=1Dvhfi',false);
	    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	    xhr.send();
	});
}

function fetchSportsNews() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).new);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', 'https://mashable.com/stories.json/?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=sports&new_after=1Dvhfi',false);
	    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	    xhr.send();
	});
}

function fetchWorldNews() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).new);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', 'https://mashable.com/stories.json/?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=world&new_after=1Dvhfi',false);
	    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	    xhr.send();
	});
}



