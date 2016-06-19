/* eslint-disable no-mixed-spaces-and-tabs */
import L from 'leaflet';
import esri from 'esri-leaflet';
import 'leaflet/dist/leaflet.css';

class MapDirective {

    constructor() {
        this.resctrict = 'EA';
        this.controller = MapController;
    }

    link(scope, element) {

        let map = L.map(element[0]).setView([47.2090507,7.7752166], 16);

        esri.tiledMapLayer({
            url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
        }).addTo(map);
        
        
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
    constructor($log, $timeout) {

        /**
         * @private
         */
        this._log = $log;
        this._timeout = $timeout;
    }


}

export default MapDirective;
/* eslint-enable no-mixed-spaces-and-tabs */