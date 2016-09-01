import CustomCondition from '../../src/CustomCondition';

describe('CustomCondition', () => {
  it('Cannot create with an undefined customAction', () => {
    var undefinedCustomAction;

    expect(() => new CustomCondition(undefinedCustomAction)).toThrowError(CustomCondition.INVALID_CUSTOM_ACTION());
  });

  it('Cannot create with an null customAction', () => {
    var nullCustomAction = null;

    expect(() => new CustomCondition(nullCustomAction)).toThrowError(CustomCondition.INVALID_CUSTOM_ACTION());
  });

  it('Cannot create with an non-function customAction', () => {
    var nonFunctionCustomAction = {};

    expect(() => new CustomCondition(nonFunctionCustomAction)).toThrowError(CustomCondition.INVALID_CUSTOM_ACTION());
  });

  it('If customAction throw an error isValid returns false', () => {
    var customActionThrowError = () => { throw new Error(); };
    var condition = new CustomCondition(customActionThrowError);

    expect(condition.isValid()).toBe(false);
  });

  it('If customAction throw an error getError must returns customAction error', () => {
    var customActionError = 'exception error'
    var customActionThrowError = () => { throw new Error(customActionError); };
    var condition = new CustomCondition(customActionThrowError);
    condition.isValid();

    expect(condition.getError()).toBe(customActionError);
  });

  it('isValid returns false if customAction returns false', () => {
    var falseCustomAction = () => { return false; };
    var condition = new CustomCondition(falseCustomAction);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if customAction returns true', () => {
    var trueCustomAction = () => { return true; };
    var condition = new CustomCondition(trueCustomAction);

    expect(condition.isValid()).toBe(true);
  });

  it('not() returns false if original condition is true', () => {
    var condition = new CustomCondition(() => { return true; });

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original condition is false', () => {
    var condition = new CustomCondition(() => { return false; });

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});