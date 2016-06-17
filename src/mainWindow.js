import angular from 'angular';
import htmlTemplate from './mainWindow.html';
import MapDirective from './components/map/map';

const moduleName = 'woodstore';

class MainWindowController {

    /*@ngInject*/
    constructor($log) {
        this._log = $log;
    }

}

let mainWindowComoponent = {
    controller: MainWindowController,
    template: htmlTemplate
}


angular.module(moduleName, [])
	.component('mainWindow', mainWindowComoponent)
    .directive('map', MapDirective.directiveFactory);
