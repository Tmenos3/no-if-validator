import NotNullOrUndefinedCondition from '../../src/NotNullOrUndefinedCondition';

describe('NotNullOrUndefinedCondition', () => {
  it('isValid returns false if parameter is undefined', () => {
    var undefinedParameter;
    var condition = new NotNullOrUndefinedCondition(undefinedParameter);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if parameter is null', () => {
    var nullParameter = null;
    var condition = new NotNullOrUndefinedCondition(nullParameter);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if parameter is not null and is not undefined', () => {
    var notNullAndNotUndefinedParameter = {};
    var condition = new NotNullOrUndefinedCondition(notNullAndNotUndefinedParameter);

    expect(condition.isValid()).toBe(true);
  });

  it('not() returns false if value is not undefined and not null', () => {
    var condition = new NotNullOrUndefinedCondition({});

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if value is undefined', () => {
    var condition = new NotNullOrUndefinedCondition(undefined);

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });

  it('not() returns true if value is null', () => {
    var condition = new NotNullOrUndefinedCondition(null);

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});