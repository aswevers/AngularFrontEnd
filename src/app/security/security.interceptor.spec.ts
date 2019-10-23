import { Security } from './security.interceptor';

describe('Security', () => {
  it('should create an instance', () => {
    expect(new Security()).toBeTruthy();
  });
});
