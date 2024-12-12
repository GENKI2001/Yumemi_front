import React from 'react';

interface ImgProps {
  text: string; // 画像のソースを指定するプロパティ
  onClick: () => void; // クリックイベントを受け取るプロパティ
  style?: React.CSSProperties; // インラインスタイルを受け取るプロパティ
  className?: string;
  disabled?: boolean;
}

const ButtonAtoms: React.FC<ImgProps> = ({
  text,
  onClick,
  style,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled} // 明示的にdisabledを適用
      className={className}
      style={style}
    >
      {/* 文字をここへ */}
      <label>{text}</label>
    </button>
  );
};

export default ButtonAtoms;
