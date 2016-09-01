var Condition = require('./Condition');

class HasNotBlankSpacesCondition extends Condition {
    constructor(value) {
        super();
        this._value = value;
    }

    isValid() {
        if (this._invert) {
            if (this._isNullOrUndefined(this._value)) {
                return !false;
            } else {
                return this._value.includes(' ');
            }
        } else {
            if (this._isNullOrUndefined(this._value)) {
                return false;
            } else {
                return !this._value.includes(' ');
            }
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        var condition = new HasNotBlankSpacesCondition(this._value);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }
}

module.exports = HasNotBlankSpacesCondition;