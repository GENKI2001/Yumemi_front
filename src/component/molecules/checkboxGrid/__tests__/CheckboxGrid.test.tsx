import { fireEvent, render, screen } from '@testing-library/react';
import CheckboxGrid from '../CheckboxGrid';

describe('CheckboxGrid Component', () => {
  const mockOptions = [
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: true },
    { label: 'Option 3', checked: false, disabled: true },
  ];

  const mockOnChange = jest.fn();

  // チェックボックスの個数が正しいことを確認
  test('renders the correct number of checkboxes', () => {
    render(
      <CheckboxGrid
        options={mockOptions}
        onChange={mockOnChange}
        columns={2}
      />,
    );

    const checkboxes = screen.getAllByTestId('checkbox-input');
    expect(checkboxes).toHaveLength(mockOptions.length);
  });

  // チェックボックスの各ラベルが正しく表示されることを確認
  test('renders the labels correctly', () => {
    render(
      <CheckboxGrid
        options={mockOptions}
        onChange={mockOnChange}
        columns={2}
      />,
    );

    mockOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  // チェックボックスがクリックされたときに、正しくonChangeが呼び出されることを確認
  test('calls onChange with the correct arguments when a checkbox is clicked', () => {
    render(
      <CheckboxGrid
        options={mockOptions}
        onChange={mockOnChange}
        columns={2}
      />,
    );

    const checkbox = screen.getAllByTestId('checkbox-input')[0];
    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(0, true);
  });

  // オプションに基づいてチェックボックスを正しく無効にすることを確認
  test('disables checkboxes correctly based on the options', () => {
    render(
      <CheckboxGrid
        options={mockOptions}
        onChange={mockOnChange}
        columns={2}
      />,
    );

    const checkboxes = screen.getAllByTestId('checkbox-input');

    expect(checkboxes[0]).not.toBeDisabled();
    expect(checkboxes[1]).not.toBeDisabled();
    expect(checkboxes[2]).toBeDisabled();
  });

  // columnsプロップに基づいて正しいグリッドレイアウトをレンダリングすることを確認
  test('renders the correct grid layout based on the columns prop', () => {
    const { container } = render(
      <CheckboxGrid
        options={mockOptions}
        onChange={mockOnChange}
        columns={3}
      />,
    );

    const grid = container.firstChild;
    expect(grid).toHaveStyle(
      'grid-template-columns: repeat(3, minmax(0, 1fr))',
    );
  });
});
