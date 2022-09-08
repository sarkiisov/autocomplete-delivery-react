import React from 'react';

export interface BaseSVGIconProps extends React.SVGProps<SVGSVGElement> {
  viewBox?: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  htmlColor?: string;
}

export const BaseSVGIcon: React.FC<BaseSVGIconProps> = ({
  children,
  viewBox = '0 0 24 24',
  width,
  height,
  fill,
  stroke,
  htmlColor
}) => {
  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      color={htmlColor}
    >
      {children}
    </svg>
  );
};