import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-confirm';
import confirmDialogComponent from './components/confirm/confirmDialog';
import htmlTemplate from './mainWindow.html';
import './mainWindow.css';
import MapDirective from './components/map/map';
import SearchService from './components/search/searchService';


const moduleName = 'woodstore';

class MainWindowController {

	/*@ngInject*/
	constructor($log, $confirm, searchService) {
		this._log = $log;
        this._confirm = $confirm;
		this._searchService = searchService;
	}

	getSearchService() { return this._searchService }
	
	markActiveResult(result) {
		this._searchService.activeResult = result;
	}

}

let mainWindowComoponent = {
	controller: MainWindowController,
	template: htmlTemplate
}

angular.module(moduleName, ['ui.bootstrap', 'angular-confirm'])
    .component('confirmDialog', confirmDialogComponent)
	.component('mainWindow', mainWindowComoponent)
	.directive('map', MapDirective.directiveFactory)
	.service('searchService', SearchService);