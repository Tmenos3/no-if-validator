var CompareToCondition = require('./CompareToCondition');

class LessOrEqualCondition extends CompareToCondition {
    constructor(value, compareTo){
        super(value, 'LSE', compareTo);
    }

    isValid(){
        return super.isValid();
    }
}

module.exports = LessOrEqualCondition;