var Condition = require('./Condition');

var isNullOrUndefined = (element) => { return (element === undefined || element === null); };

class Validator {
    constructor() {
        this._conditionList = [];
    }

    addCondition(condition) {
        if (isNullOrUndefined(condition)) {
            throw new Error(Validator.INVALID_CONDITION_LIST());
        } else {
            if (!(condition instanceof Condition)) {
                throw new Error(Validator.INVALID_CONDITION_LIST());
            }else{
                this._conditionList.push(condition);
            }
        }
    }

    execute(resolve, reject) {
        if (isNullOrUndefined(resolve)) {
            throw new Error(Validator.INVALID_RESOLVE_CALLBACK());
        } else {
            if (isNullOrUndefined(reject)) {
                throw new Error(Validator.INVALID_REJECT_CALLBACK());
            } else {
                //return new Promise((resolve, reject) => {
                    var allAreValid = true;
                    for (var index = 0; index < this._conditionList.length; index++) {
                        var condition = this._conditionList[index];
                        if (!condition.isValid()) {
                            allAreValid = false;
                            reject(condition.getError());
                            break;
                        }
                    }

                    if (allAreValid) {
                        resolve();
                    }
                //});
            }
        }
    }

    static INVALID_CONDITION_LIST() {
        return 'Debe proporcionar una lista de condiciones valida.';
    }

    static INVALID_RESOLVE_CALLBACK(){
        return 'Debe proporcionar un resolve valido.';
    }

    static INVALID_REJECT_CALLBACK(){
        return 'Debe proporcionar un reject valido.';
    }
}

module.exports = Validator;