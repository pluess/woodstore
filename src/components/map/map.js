/* eslint-disable no-mixed-spaces-and-tabs */
import L from 'leaflet';
import esri from 'esri-leaflet';
import 'leaflet/dist/leaflet.css';

class MapDirective {

	constructor() {
		this.resctrict = 'EA';
		this.controller = MapController;
        
        L.Icon.Default.imagePath = '/images';
	}

	link(scope, element, attr, ctrl) {

		let map = L.map(element[0]).setView([47.2090507, 7.7752166], 16);

		esri.tiledMapLayer({
			url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
		}).addTo(map);

		ctrl.map = map;
	}

	/**
	 * @returns {MapDirective}
	 */
	static directiveFactory() {
		return new MapDirective();
	}
}

class MapController {

	/*@ngInject*/
	constructor($scope, $log, $timeout, searchService) {
		this._log = $log;
		this._timeout = $timeout;
		this._searchServide = searchService;
		
		$scope.$watch(
			() => { return this._searchServide.activeResult; }, 
		  (newValue) => {
				if (this._map && newValue) {
					if (this._activeMarker) {
						this._map.removeLayer(this._activeMarker);
					}
					this._activeMarker = L.marker([newValue.lat, newValue.long]).addTo(this._map);
				}
			});
	}

	get map() { return this._map; }
	set map(map) { this._map = map; }

}

export default MapDirective;
/* eslint-enable no-mixed-spaces-and-tabs */