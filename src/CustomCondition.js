var Condition = require('./Condition');

class CustomCondition extends Condition {
    constructor(customAction) {
        super();

        if (this._isNullOrUndefined(customAction)) {
            throw new Error(CustomCondition.INVALID_CUSTOM_ACTION());
        } else if (typeof customAction !== 'function') {
            throw new Error(CustomCondition.INVALID_CUSTOM_ACTION());
        } else {
            this._customAction = customAction;
        }
    }

    isValid() {
        if (this._invert) {
            try {
                return !this._customAction();
            } catch (error) {
                this._err = error.message;
                return !false;
            }
        } else {
            try {
                return this._customAction();
            } catch (error) {
                this._err = error.message;
                return false;
            }
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        var condition = new CustomCondition(this._customAction);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }

    static INVALID_CUSTOM_ACTION() {
        return 'Debe proporcionar acción válida.';
    }
}

module.exports = CustomCondition;
