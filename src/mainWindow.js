import angular from 'angular';
import htmlTemplate from './mainWindow.html';
import MapDirective from './components/map/map';
import SearchService from './components/search/searchService';

const moduleName = 'woodstore';

class MainWindowController {

	/*@ngInject*/
	constructor($log, searchService) {
		this._log = $log;
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

angular.module(moduleName, [])
	.component('mainWindow', mainWindowComoponent)
	.directive('map', MapDirective.directiveFactory)
	.service('searchService', SearchService);