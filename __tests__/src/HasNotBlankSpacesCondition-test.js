import HasNotBlankSpacesCondition from '../../src/HasNotBlankSpacesCondition';

describe('HasNotBlankSpacesCondition', () => {
  it('isValid returns false if value is undefined', () => {
    var undefinedValue;
    var condition = new HasNotBlankSpacesCondition(undefinedValue);

    expect(condition.isValid()).toEqual(false);
  });

  it('isValid returns false if value is null', () => {
    var nullValue = null;
    var condition = new HasNotBlankSpacesCondition(nullValue);

    expect(condition.isValid()).toEqual(false);
  });

  it('isValid returns false if value has blank spaces', () => {
    var condition = new HasNotBlankSpacesCondition(' 0   0  ');

    expect(condition.isValid()).toEqual(false);
  });

  it('isValid returns true if value has not blanck spaces', () => {
    var condition = new HasNotBlankSpacesCondition('valueWithoutBlankSpaces');

    expect(condition.isValid()).toEqual(true);
  });

  it('not() returns false if original conditions returns true', () => {
    var condition = new HasNotBlankSpacesCondition('valueWithoutBlankSpaces');

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original conditions returns false', () => {
    var condition = new HasNotBlankSpacesCondition('      ');

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});