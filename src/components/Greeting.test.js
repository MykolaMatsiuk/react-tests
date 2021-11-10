import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	beforeEach(() => {
		render(<Greeting />);
	});

	test('renders "Hello World!" as text', () => {
		// Arrange
		// render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		const helloWorldElement = screen.getByText('Hello World!');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders "It\'s good to see you!" if the button wasn\'t clicked', () => {
		// render(<Greeting />);

		const textBeforeBtnClicked = screen.getByText("It's good to see you!");
		expect(textBeforeBtnClicked).toBeInTheDocument();
	});

	test('renders "Changed!" if the button was clicked', () => {
		// Arrange
		// render(<Greeting />);

		// Act
		const btnElement = screen.getByRole('button');
		userEvent.click(btnElement);

		// Assert
		const textAfterBtnClicked = screen.getByText('Changed!');
		expect(textAfterBtnClicked).toBeInTheDocument();
	});

	test('removes paragraph after the button was clicked', () => {
		// render(<Greeting />);

		const btnElement = screen.getByRole('button');
		userEvent.click(btnElement);

		const textBeforeBtnClicked = screen.queryByText(
			"It's good to see you!"
		);
		expect(textBeforeBtnClicked).toBeNull();
	});
});
