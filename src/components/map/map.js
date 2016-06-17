/* eslint-disable no-mixed-spaces-and-tabs */
import L from 'leaflet';
import esri from 'esri-leaflet';
import 'leaflet/dist/leaflet.css';

class MapDirective {

    constructor() {
        this.resctrict = 'E';
        this.controller = MapController;
    }

    link(scope, element) {

        let map = L.map(element[0]).setView([51.505, -0.09], 8);

        esri.tiledMapLayer({
            url: "https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"
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