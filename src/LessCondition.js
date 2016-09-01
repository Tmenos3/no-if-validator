var CompareToCondition = require('./CompareToCondition');

class LessCondition extends CompareToCondition {
    constructor(value, compareTo){
        super(value, 'LS', compareTo);
    }

    isValid(){
        return super.isValid();
    }
}

module.exports = LessCondition;
