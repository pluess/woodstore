import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import esri from 'esri-leaflet';

class MapDirective {

    constructor() {
        this.resctrict = 'E';
        this.controller = MapController;
    }

    link(scope, element) {
        let map = L.map(element[0]).setView([30.70, -81.47], 12);

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