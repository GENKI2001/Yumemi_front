import React from 'react';
import ImgAtoms from '../../atoms/img/ImgAtoms';

interface LogoProps {
  img_src: string; // 画像のソースを指定するプロパティ
  style?: React.CSSProperties; // インラインスタイルを受け取るプロパティ
  alt?: string; // 画像のalt属性を指定するプロパティ
}

const ImgLogo: React.FC<LogoProps> = ({ img_src, style, alt }) => {
  return (
    <ImgAtoms img_src={img_src} alt={alt ?? 'Logo'} className={'image-logo'} />
  );
};

export default ImgLogo;
