var Condition = require('./Condition');

class IsNumberCondition extends Condition {
    constructor(value) {
        super();

        this._value = value;
    }

    isValid() {
        if (this._invert) {
            return isNaN(this._value);
        } else {
            return !isNaN(this._value);
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        //this._invert = !this._invert; return this;
        var condition = new IsNumberCondition(this._value);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }
}

module.exports = IsNumberCondition;