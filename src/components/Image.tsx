/* eslint-disable @next/next/no-img-element */
type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: Props) => (
  <img src={src} alt={alt || ''} className={className || ''} />
);

export default Image;
