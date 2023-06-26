import { screen } from '@testing-library/react';
import { Button } from '..';
import { render } from '../../../test/test-utils';

describe('Button', () => {
    it('should render Button', () => {
        render(<Button variant="primary">Click me</Button>);
        const btn = screen.getByRole('button', { name: 'Click me' });
        expect(btn).toBeInTheDocument();
    });

    it('should execute onClick fn if provided', () => {
        const onClickFn = vi.fn();
        render(
            <Button variant="primary" onClick={onClickFn}>
                Click me
            </Button>
        );
        screen.getByRole('button', { name: 'Click me' }).click();
        expect(onClickFn).toHaveBeenCalled();
    });
});
