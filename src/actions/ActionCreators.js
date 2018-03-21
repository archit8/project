import {
		FETCH_NEWS_CATEGORY_SUCCESS,
		FETCH_NEWS_ERROR,
}from '../constants/ActionTypes';

export function getByCategoryNews(category) {
	return (dispatch) => fetchNewsByCategory(category).then(
				(news) => dispatch( {type: FETCH_NEWS_CATEGORY_SUCCESS, news} ), 
				(error) => dispatch( {type: FETCH_NEWS_ERROR, message: error} )
	);
}

function fetchNewsByCategory(category) {
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
	    xhr.open('GET', `https://mashable.com/stories.json/?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=${category}&new_after=1Dvhfi`,false);
	    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	    xhr.send();
	});
}


