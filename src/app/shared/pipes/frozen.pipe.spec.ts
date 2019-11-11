import { FrozenPipe } from './frozen.pipe';

describe('FrozenPipe', () => {
  it('create an instance', () => {
    const pipe = new FrozenPipe();
    expect(pipe).toBeTruthy();
  });
});
