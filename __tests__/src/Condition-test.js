import Condition from '../../src/Condition';

describe('Condition', () => {
  it('can create a condition', () => {
    var condition = new Condition();

    expect(condition.getError()).toEqual(new Error());
    expect(condition._invert).toEqual(false);
  });

  it('isValid must throw exception', () => {
    var condition = new Condition();

    expect(() => condition.isValid()).toThrowError(Condition.MUST_BE_OVERRIDED());
  });

  it('throw() set a new error', () => {
    var condition = new Condition();
    var newError = new Error('anyDescription');

    expect(condition.throw(newError).getError()).toEqual(newError);
  });

  it('Cannot set throw() with undefined exception', () => {
    var condition = new Condition();
    var undefinedException;
    expect(() => condition.throw(undefinedException)).toThrowError(Condition.INVALID_ERROR());
  });

  it('not() set _invert to oposite', () => {
    var condition = new Condition();
    var invertedCondition = condition.not();
    expect(invertedCondition._invert).toEqual(true);

    var revertedCondition = invertedCondition.not();
    expect(revertedCondition._invert).toEqual(false);
  });
});