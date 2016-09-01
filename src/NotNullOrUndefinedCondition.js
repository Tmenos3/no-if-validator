var Condition = require('./Condition');

class NotNullOrUndefinedCondition extends Condition {
    constructor(value) {
        super();
        this._value = value;
    }

    isValid() {
        if (this._invert) {
            return (this._isNullOrUndefined(this._value));
        } else {
            return !(this._isNullOrUndefined(this._value));
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        var condition = new NotNullOrUndefinedCondition(this._value);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }
}

module.exports = NotNullOrUndefinedCondition;
