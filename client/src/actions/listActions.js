import fetch from 'isomorphic-fetch'

	export const fetchLists = () => {
		return {
			type: 'FETCH_LISTS'
		};
	};