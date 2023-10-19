/* eslint-disable @next/next/no-img-element */
type Props = {
  src: string;
  alt: string;
  className?: string;
};

const IMG_HOST = process.env.NEXT_PUBLIC_IMG_HOST || '';

const Image = ({ src, alt, className }: Props) => (
  <img
    src={
      src?.includes('https://storage.playdapp.com/')
        ? src
        : `${IMG_HOST}/${src}`
    }
    alt={alt || ''}
    className={className || ''}
  />
);

export default Image;
