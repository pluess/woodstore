class HttpErrorService {
    
    /*@ngInject*/
    constructor($log) {
        this._log = $log;
        
        /**
         * @type {number}
         */
        this._httpStatusCode = null;
        /**
         * @type {string}
         */
        this._message = null;
    }
    
    get httpStatusCode() { return this._httpStatusCode; }
    set httpStatusCode(code) { this._httpStatusCode=code; }

    get message() { return this._message; }
    set message(message) { this._message=message; }
}

export default HttpErrorService;