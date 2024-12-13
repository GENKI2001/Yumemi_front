import React from 'react';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';

interface LogoProps {
  text: string; // ボタンのテキスト
  isSelected?: boolean; // 選択状態
  onClick: () => void; // クリックイベントを受け取るプロパティ
  style?: React.CSSProperties; // インラインスタイルを受け取るプロパティ
  disabled?: boolean; // ボタンの無効化状態
}

const SelectedWhiteButton: React.FC<LogoProps> = ({
  text,
  style,
  onClick,
  isSelected,
  disabled,
}) => {
  return (
    <ButtonAtoms
      text={text}
      style={{
        ...style,
        borderRadius: 1,
        padding: '10px 20px',
        backgroundColor: isSelected ? 'lightgrey' : 'white',
        border: isSelected ? '0.5px solid grey' : '1px solid lightgrey',
        color: 'grey',
        boxShadow: isSelected ? undefined : '0 2px 2px rgba(0, 0, 0, 0.1)',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      className={`bg-white ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default SelectedWhiteButton;
