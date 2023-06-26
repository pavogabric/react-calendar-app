import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from '..';
import { render, waitFor } from '../../../test/test-utils';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

describe('Dropdown', () => {
    it('should render correctly', () => {
        const { container } = render(
            <Dropdown
                value="option1"
                options={options}
                onChange={() => null}
                label="Select option"
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('should render label', () => {
        render(
            <Dropdown
                value="option1"
                options={options}
                onChange={() => null}
                label="Select option"
            />
        );
        const label = screen.getByLabelText('Select option');
        expect(label).toBeInTheDocument();
    });

    it('should show options if dropdown is clicked ', async () => {
        render(
            <Dropdown
                value="option1"
                options={options}
                onChange={() => null}
                label="Select option"
            />
        );
        const dropdownBtn = screen.getByTestId('value');
        userEvent.click(dropdownBtn);

        await waitFor(() => {
            const option1 = screen.getByText('Option 1');
            const option2 = screen.getByText('Option 2');
            const option3 = screen.getByText('Option 3');

            expect(option1).toBeInTheDocument();
            expect(option2).toBeInTheDocument();
            expect(option3).toBeInTheDocument();
        });
    });
});
