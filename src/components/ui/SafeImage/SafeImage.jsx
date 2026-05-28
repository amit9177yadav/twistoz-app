import { useState, useEffect } from 'react';
import images from '../../../data/images';

export default function SafeImage({
  src,
  alt,
  className,
  fallback = images.fallback,
  loading = 'lazy',
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={loading}
      {...props}
    />
  );
}
