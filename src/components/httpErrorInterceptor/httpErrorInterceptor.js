
let that = null;

class HttpErrorInterceptor {
    
    constructor($log, $q, httpErrorService) {
        this._log = $log;
        this._q = $q;
        this._httpErrorService = httpErrorService;
        
        that = this;
        this._log.debug('Interceptor created');
    }
    
    response(response) {
        that._log.debug('HttpErrorInterceptor.response');
        that._log.debug(response);
        return response;
    }
    
    responseError(rejection) {
        that._log.debug('HttpErrorInterceptor.responseError');
        that._log.debug(rejection);
        
        that._httpErrorService.httpStatusCode = rejection.status;
                
        return that._q.reject(rejection);
    }
    
    /*@ngInject*/
    static factory($log, $q, httpErrorService) {
        return new HttpErrorInterceptor($log, $q, httpErrorService);
    }
}

export default HttpErrorInterceptor;