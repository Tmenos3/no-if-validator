var InstanceOfCondition = require('./InstanceOfCondition');

class IsStringCondition extends InstanceOfCondition {
    constructor(value) {
        super(value, String);
    }

    isValid() {
        if (this._invert) {
            return ((typeof(this._value) != 'string') && super.isValid());
        } else {
            return ((typeof(this._value) == 'string') || super.isValid());
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        //this._invert = !this._invert; return this;
        var condition = new IsStringCondition(this._value);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }
}

module.exports = IsStringCondition;