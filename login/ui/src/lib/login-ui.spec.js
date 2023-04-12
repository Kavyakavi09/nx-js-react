import { render } from '@testing-library/react';
import LoginUi from './login-ui';
describe('LoginUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginUi />);
    expect(baseElement).toBeTruthy();
  });
});
