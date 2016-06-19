import SearchResult from './searchResult';

class SearchService {

	/*@ngInject*/
	constructor($log) {
		this._log = $log;
		this._activeResult = null;
		this._searchResults = [
			new SearchResult('A', 47.2090507,7.7752166),
			new SearchResult('B', 47.2091,7.7753),
			new SearchResult('C', 47.2092,7.7754),
			new SearchResult('E', 47.2093,7.7755),
			new SearchResult('F', 47.2094,7.7756)
		];
	}

	
	getSearchResults() {
		return this._searchResults;
	}
	
	set activeResult(result) { 
		this._activeResult = result;	
		this._log.debug('Active result is now: '+JSON.stringify(result));
	}
	get activeResult() { return this._activeResult; }
	
}

export default SearchService;