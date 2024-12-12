import React from 'react';
import ButtonAtoms from '../../atoms/button/ButtonAtoms';

interface LogoProps {
  text: string; // 画像のソースを指定するプロパティ
  onClick: () => void; // クリックイベントを受け取るプロパティ
  style?: React.CSSProperties; // インラインスタイルを受け取るプロパティ
  disabled?: boolean;
}

const RoundWhiteButton: React.FC<LogoProps> = ({
  text,
  style,
  onClick,
  disabled,
}) => {
  return (
    <ButtonAtoms
      text={text}
      style={{
        ...style,
        borderRadius: 100,
        padding: '10px 20px',
        backgroundColor: 'white',
        border: '1px solid lightgrey',
        color: 'grey',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
      }}
      className="rounded-full bg-white"
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default RoundWhiteButton;
