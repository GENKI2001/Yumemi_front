import React from 'react';

interface ImgProps {
  img_src: string; // 画像のソースを指定するプロパティ
  style?: React.CSSProperties; // インラインスタイルを受け取るプロパティ
  alt?: string; // 画像のalt属性を指定するプロパティ
  className?: string;
}

const ImgAtoms: React.FC<ImgProps> = ({ img_src, style, alt, className }) => {
  return <img src={img_src} alt={alt} className={className} style={style} />;
};

export default ImgAtoms;
