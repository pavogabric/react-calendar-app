import { screen } from '@testing-library/react';
import { ConfirmationModal } from '..';
import { mockResizeObserver, render } from '../../../test/test-utils';

describe('ConfirmationModal', () => {
    beforeEach(() => {
        mockResizeObserver();
    });

    it('should render correctly', () => {
        const { container } = render(
            <ConfirmationModal
                open
                title="Modal title"
                description="Modal description"
                onClose={() => null}
                onConfirm={() => null}
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('should render title and description', () => {
        render(
            <ConfirmationModal
                open
                title="Modal title"
                description="Modal description"
                onClose={() => null}
                onConfirm={() => null}
            />
        );
        const title = screen.getByText('Modal title');
        const description = screen.getByText('Modal description');

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('should render cancel and confirm buttons', () => {
        render(
            <ConfirmationModal
                open
                title="Modal title"
                description="Modal description"
                onClose={() => null}
                onConfirm={() => null}
            />
        );
        const cancelBtn = screen.getByRole('button', { name: 'Cancel' });
        const confirmBtn = screen.getByRole('button', { name: 'Yes' });

        expect(cancelBtn).toBeInTheDocument();
        expect(confirmBtn).toBeInTheDocument();
    });

    it('should execute onClose when cancel button is clicked', () => {
        const cancelFn = vi.fn();
        render(
            <ConfirmationModal
                open
                title="Modal title"
                description="Modal description"
                onClose={cancelFn}
                onConfirm={() => null}
            />
        );
        screen.getByRole('button', { name: 'Cancel' }).click();
        expect(cancelFn).toHaveBeenCalled();
    });

    it('should execute onConfirm when confirm button is clicked', () => {
        const confirmFn = vi.fn();
        render(
            <ConfirmationModal
                open
                title="Modal title"
                description="Modal description"
                onClose={() => null}
                onConfirm={confirmFn}
            />
        );
        screen.getByRole('button', { name: 'Yes' }).click();
        expect(confirmFn).toHaveBeenCalled();
    });
});
