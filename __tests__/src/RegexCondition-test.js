import RegexCondition from '../../src/RegexCondition';

describe('RegexCondition', () => {
  it('Cannot create with an undefined regex', () => {
    var undefinedRegex;

    expect(() => new RegexCondition('any value', undefinedRegex)).toThrowError(RegexCondition.INVALID_REGEX());
  });

  it('Cannot create with an null regex', () => {
    var nullRegex = null;

    expect(() => new RegexCondition('any value', nullRegex)).toThrowError(RegexCondition.INVALID_REGEX());
  });

  it('Cannot create with an non-string regex', () => {
    var nonStringRegex = {};

    expect(() => new RegexCondition('any value', nonStringRegex)).toThrowError(RegexCondition.INVALID_REGEX());
  });

  it('isValid returns false if value is undefined', () => {
    var undefinedValue;
    var condition = new RegexCondition(undefinedValue, 'regularExpresion');

    expect(condition.isValid()).toEqual(false);
  });

  it('isValid returns false if value is null', () => {
    var nullValue = null;
    var condition = new RegexCondition(nullValue, 'regularExpresion');

    expect(condition.isValid()).toEqual(false);
  });

  it('isValid returns false if value does not match with regex', () => {
    var regex = '[A-Z]';
    var notMatchingValue = '123';
    var condition = new RegexCondition(notMatchingValue, regex);

    expect(condition.isValid()).toEqual(false);
  });

  it('isValid returns true if value match with regex', () => {
    var regex = '[A-Z]';
    var matchingValue = 'ABC';
    var condition = new RegexCondition(matchingValue, regex);

    expect(condition.isValid()).toEqual(true);
  });

  it('not() returns false if original conditions returns true', () => {
    var regex = '[A-Z]';
    var matchingValue = 'ABC';
    var condition = new RegexCondition(matchingValue, regex);

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original conditions returns false', () => {
    var regex = '[A-Z]';
    var matchingValue = '123';
    var condition = new RegexCondition(matchingValue, regex);

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});