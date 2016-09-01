import Condition from '../../src/Condition';
import NotNullOrUndefinedCondition from '../../src/NotNullOrUndefinedCondition';
import CustomCondition from '../../src/CustomCondition';
import Validator from '../../src/Validator';

describe('Validator', () => {
  it('Cannot addCondition undefined conditions', () => {
    var undefinedConditionsList;
    var validator = new Validator();

    expect(() => validator.addCondition(undefinedConditionsList).toThrowError(Validator.INVALID_CONDITION_LIST()));
  });

  it('Cannot addCondition null conditions', () => {
    var nullConditionsList = null;
    var validator = new Validator();

    expect(() => validator.addCondition(nullConditionsList).toThrowError(Validator.INVALID_CONDITION_LIST()));
  });

  it('Cannot addCondition with non Condition', () => {
    var nonCondition = {};
    var validator = new Validator();

    expect(() => validator.addCondition(nonCondition)).toThrowError(Validator.INVALID_CONDITION_LIST());
  });

  it('Cannot execute with undefined resolve callback', () => {
    var undefinedResolveCallback = null;
    var validator = new Validator();

    expect(() => validator.execute(undefinedResolveCallback, () => { })).toThrowError(Validator.INVALID_RESOLVE_CALLBACK());
  });

  it('Cannot execute with null resolve callback', () => {
    var nullResolveCallback = null;
    var validator = new Validator();

    expect(() => validator.execute(nullResolveCallback, () => { })).toThrowError(Validator.INVALID_RESOLVE_CALLBACK());
  });

  it('Cannot execute with undefined reject callback', () => {
    var undefinedRejectCallback = null;
    var validator = new Validator();

    expect(() => validator.execute(() => { }, undefinedRejectCallback)).toThrowError(Validator.INVALID_REJECT_CALLBACK());
  });

  it('Cannot execute with null reject callback', () => {
    var nullRejectCallback = null;
    var validator = new Validator();

    expect(() => validator.execute(() => { }, nullRejectCallback)).toThrowError(Validator.INVALID_REJECT_CALLBACK());
  });

  it('Can create with a list of Conditions', () => {
    var validator = new Validator();
    validator.addCondition(new NotNullOrUndefinedCondition('parameter', 'error'));
    validator.addCondition(new NotNullOrUndefinedCondition('parameter', 'error'));

    expect(validator._conditionList.length).toEqual(2);
  });

  pit('Must validate all conditions if all are valid when validator executes', () => {
    var mockedCondition = new NotNullOrUndefinedCondition('aParameter', 'error');
    mockedCondition.isValid = jest.fn(() => { return true });

    var validator = new Validator();
    validator.addCondition(mockedCondition);
    validator.addCondition(mockedCondition);

    return validator.execute(() => expect(mockedCondition.isValid.mock.calls.length).toEqual(2),
      (err) => expect(true).toBe(false));
  });

  pit('Must execute reject if one condition is not valid', () => {
    var errToBeUsed = 'error';
    var notValidConditionCondition = new NotNullOrUndefinedCondition('aParameter', errToBeUsed);
    notValidConditionCondition.isValid = jest.fn(() => { return false });

    var validConditionCondition = new NotNullOrUndefinedCondition('aParameter', 'error');
    validConditionCondition.isValid = jest.fn(() => { return true });

    var reject = jest.fn((err) => { });

    var validator = new Validator();
    validator.addCondition(notValidConditionCondition);
    validator.addCondition(validConditionCondition);

    return validator.execute(() => expect(false).toBe(true),
      (err) => expect(err).toEqual(notValidConditionCondition.getError()));
  });

  pit('Must execute resolve if all conditions are valid', () => {
    var validCondition = new NotNullOrUndefinedCondition('aParameter', 'error');
    validCondition.isValid = jest.fn(() => { return true });

    var validator = new Validator();
    validator.addCondition(validCondition);
    validator.addCondition(validCondition);

    return validator.execute(() => expect(validCondition.isValid.mock.calls.length).toEqual(2),
      (err) => expect(true).toBe(false));
  });
});