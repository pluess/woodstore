class HttpErrorInterceptorPanelController {
    
    /*@ngInject*/
	constructor($log, $http) {
		this._log = $log;
        this._http = $http;
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

let httpErrorInterceptorPanelComponent = {
    template: '<button class="btn btn-default" ng-click="$ctrl.issueGetRequest()">Get Request</button>',
    controller: HttpErrorInterceptorPanelController
}

export default httpErrorInterceptorPanelComponent;