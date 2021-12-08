import Types from './Types';

describe('Types', () => {
  it('className', () => {
    const types = Types.className;
    expect(types).toBeDefined();
  });

  it('children', () => {
    const types = Types.children;
    expect(types).toBeDefined();
  });
});
