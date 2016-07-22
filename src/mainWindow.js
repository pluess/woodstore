import angular from 'angular';
import htmlTemplate from './mainWindow.html';
import HttpErrorInterceptor from './components/httpErrorInterceptor/httpErrorInterceptor';
import MapDirective from './components/map/map';
import SearchService from './components/search/searchService';

const moduleName = 'woodstore';

class MainWindowController {

	/*@ngInject*/
	constructor($log, $http, searchService) {
		this._log = $log;
        this._http = $http;
		this._searchService = searchService;
        this._log.debug("MainWindowController.constructor");
	}

	getSearchService() { return this._searchService }
	
	markActiveResult(result) {
		this._searchService.activeResult = result;
	}
    
    issueGetRequest() {
        this._log.debug('MainWindowController.issueGetRequest');
        this._http.get('http://localhost:3000')
            .then(() => {
                this._log.debug("success");
            },
            () => {
            this._log.debug("failed");
        });
    }

}

let mainWindowComoponent = {
	controller: MainWindowController,
	template: htmlTemplate
}

angular.module(moduleName, [])
	.component('mainWindow', mainWindowComoponent)
    .config(['$httpProvider', function($httpProvider) {  
        $httpProvider.interceptors.push('httpErrorInterceptor');
    }])
    .factory('httpErrorInterceptor', HttpErrorInterceptor.factory)
	.directive('map', MapDirective.directiveFactory)
	.service('searchService', SearchService);