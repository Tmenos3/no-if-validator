var Condition = require('./Condition');

class InstanceOfCondition extends Condition {
    constructor(value, type) {
        super();

        if (this._isNullOrUndefined(type)) {
            throw new Error(InstanceOfCondition.INVALID_TYPE());
        } else {
            this._value = value;
            this._type = type;
        }
    }

    isValid() {
        if (this._invert) {
            return !(this._value instanceof this._type);
        } else {
            return (this._value instanceof this._type);
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        var condition = new InstanceOfCondition(this._value, this._type);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }

    static INVALID_TYPE() {
        return 'El tipo proporcionado es inválido';
    }
}

module.exports = InstanceOfCondition;