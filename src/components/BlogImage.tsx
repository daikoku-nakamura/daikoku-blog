import base64url from 'base64url';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
};
export default function BlogImage({
  imageUrl,
  title,
  width = 1280,
  height = 720,
  className,
}: Props) {
  return (
    <Image
      src={`${imageUrl}?w=${width}&h=${height}}&blend64=${base64url(
        `https://assets.imgix.net/~text?txtsize=72&txt-color=FFF&w=${width - 80}&h=${
          height / 2
        }&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
          title,
        )}`,
      )}&blend-mode=normal&blend-align=top,left&blend-x=40&blend-y=100`}
      width={width}
      height={height}
      alt={title}
      className={className}
    />
  );
}
