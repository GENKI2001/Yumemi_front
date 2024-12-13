// Atoms/Heading.tsx
import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeadingOneAtoms: React.FC<HeadingProps> = ({
  children,
  className,
}) => <h1 className={className}>{children}</h1>;
