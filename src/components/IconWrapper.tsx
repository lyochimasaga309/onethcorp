import React from 'react';

interface IconWrapperProps {
  icon: React.ReactElement;
  className?: string;
}

export default function IconWrapper({ icon, className }: IconWrapperProps) {
  return React.cloneElement(icon, {
    className: className ?? '',
  });
}
