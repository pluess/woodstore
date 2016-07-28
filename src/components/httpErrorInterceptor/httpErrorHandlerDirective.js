import okDialogTemplate from './../../okDialogTemplate.html';

class HttpErrorHandlerDirective {
    
    constructor($log) {
        this._log = $log;
        
        this.restrict = 'A';
        this.controllerAs = '$ctrl';
        this.bindToController = true;
        this.controller = HttpErrorHandlerController;
        
    }
        
    /*@ngInject*/
    static directiveFactory($log) {
        return new HttpErrorHandlerDirective($log);
    }
    
}
    
class HttpErrorHandlerController {

    /*@ngInject*/
    constructor($log, $scope, $confirm, httpErrorService) {
        this._log = $log;
        this._scope = $scope;
        this._httpErrorServie = httpErrorService;
        this._confirm = $confirm;
    }
    
    $onInit() {
        this._scope.$watch(
            () => this._httpErrorServie.httpStatusCode,
            () => {
                if (this._httpErrorServie.httpStatusCode===-1 || this._httpErrorServie.httpStatusCode>299) {
                    this._confirm(
                        {text: 'Error with server communication! Code='+this._httpErrorServie.httpStatusCode},
                        {template: okDialogTemplate }
                    )                
                }
            }
        )
    }

}

export default HttpErrorHandlerDirective;