let that = null;

class HttpErrorInterceptor {
    
    constructor($log) {
        this._log = $log;
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
    }
    
    /*@ngInject*/
    static factory($log) {
        return new HttpErrorInterceptor($log);
    }
}

export default HttpErrorInterceptor;