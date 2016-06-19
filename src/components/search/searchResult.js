class SearchResult {
	
	constructor(id, lat, long) {
		this._id = id;
		this._lat = lat;
		this._long = long;
	}
	
	get id() { return this._id; }
	get lat() { return this._lat; }
	get long() { return this._long; }
}

export default SearchResult;