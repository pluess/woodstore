import htmlTemplate from './confirmDialog.html';
import okDialogTemplate from './../../okDialogTemplate.html';

class ConfirmDialogController {
    
    /*@ngInject*/
	constructor($log, $confirm) {
		this._log = $log;
        this._confirm = $confirm;
	}
    
    clicked() {
        this._confirm(
            {text: 'Successfuly saved!'},
            {template: okDialogTemplate }
        )
        .then(() => this._log.debug("Yes, I am clicked."))
    }
}

let confirmDialogComponent = {
    template: htmlTemplate,
    controller: ConfirmDialogController
}

export default confirmDialogComponent;