import React from 'react';
import RoundWhiteButton from '../../molecules/button/RoundWhiteButton';
import ImgLogo from '../../molecules/logo/ImgLogo';

interface AppHeaderProps {
  img_src: string;
  style?: React.CSSProperties;
  alt?: string;
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  img_src,
  style,
  alt,
  className,
}) => {
  const defaultHeaderStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '0.5rem 0',
  };

  const contentStyle: React.CSSProperties = {
    margin: '0 auto',
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <header className={className} style={{ ...defaultHeaderStyle, ...style }}>
      <div style={contentStyle}>
        <ImgLogo img_src={img_src} alt={alt ?? 'Logo'} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // 水平方向中央揃え
            alignItems: 'center', // 垂直方向中央揃え
            gap: '8px', // ボタン間のスペースを8px
          }}
        >
          <RoundWhiteButton
            text="Sign In"
            onClick={() => {
              alert('Sign In');
            }}
          />
          <RoundWhiteButton
            text="Sign Up"
            onClick={() => {
              alert('Sign In');
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
