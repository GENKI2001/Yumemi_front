// Molecules/Section.tsx
import React from 'react';
import { HeadingOneAtoms } from '../../atoms/text/HeadingOneAtoms';
import { Paragraph } from '../../atoms/text/Paragraph';

type SectionProps = {
  title: string; // セクションタイトル
  description: string; // 説明文
  className?: string; // 任意のクラス名
};

export const TitleDescription: React.FC<SectionProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <section className={className} data-testid="section">
      <HeadingOneAtoms>{title}</HeadingOneAtoms>
      <Paragraph>{description}</Paragraph>
    </section>
  );
};
