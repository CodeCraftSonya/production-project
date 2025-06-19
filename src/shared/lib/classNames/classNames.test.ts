import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some')).toBe('some');
  });

  test('with additional class', () => {
    const expected = 'some class1 class2';
    expect(classNames('some', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'some class1 class2 hovered scrollable';
    expect(classNames('some', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('with mods false', () => {
    const expected = 'some class1 class2 scrollable';
    expect(classNames('some', { hovered: false, scrollable: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('with mods undefined', () => {
    const expected = 'some class1 class2 scrollable';
    expect(classNames('some', { hovered: undefined, scrollable: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });
});
