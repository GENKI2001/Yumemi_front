import React from 'react';
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
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  return (
    <header className={className} style={{ ...defaultHeaderStyle, ...style }}>
      <div style={contentStyle}>
        <ImgLogo img_src={img_src} alt={alt ?? 'Logo'} />
      </div>
    </header>
  );
};

export default AppHeader;
