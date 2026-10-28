import React from 'react';

export const StarburstShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-24',
  color = '#F9000E',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M60 0L74.1 23.3L101.4 14.6L99.2 43.1L120 60L99.2 76.9L101.4 105.4L74.1 96.7L60 120L45.9 96.7L18.6 105.4L20.8 76.9L0 60L20.8 43.1L18.6 14.6L45.9 23.3L60 0Z"
      fill={color}
    />
  </svg>
);

export const PolygonShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-28 h-20',
  color = '#FFA300',
}) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <polygon points="18,0 98,12 82,80 2,68" fill={color} />
  </svg>
);

export const ArchShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-20',
  color = '#F9000E',
}) => (
  <svg
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32V80H0V32Z"
      fill={color}
    />
  </svg>
);

export const AsteriskShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-12',
  color = '#FFA300',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20 4H28V16.8L37.1 7.7L42.7 13.3L33.6 22.4H44V30.4H33.6L42.7 39.5L37.1 45.1L28 36V48H20V36L10.9 45.1L5.3 39.5L14.4 30.4H4V22.4H14.4L5.3 13.3L10.9 7.7L20 16.8V4Z"
      fill={color}
    />
  </svg>
);

export const HalfMoonShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-16',
  color = '#0B0B10',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C32 46.3269 32 17.6731 32 0Z"
      fill={color}
    />
  </svg>
);

export const WavyPillShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-8',
  color = '#FEE2E2',
}) => (
  <svg
    viewBox="0 0 96 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="96" height="32" rx="16" fill={color} />
    <circle cx="20" cy="16" r="6" fill="#F9000E" />
  </svg>
);

export const CutCornerShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-14 h-14',
  color = '#16AB59',
}) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M0 0H38L56 18V56H0V0Z" fill={color} />
  </svg>
);
