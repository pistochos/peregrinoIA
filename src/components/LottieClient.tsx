'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player').then(m => m.default), {
  ssr: false,
});

type Props = {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export default function LottieClient({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
}: Props) {
  if (!animationData) return null;
  return (
    <Lottie
      play={autoplay}
      loop={loop}
      animationData={animationData}
      style={style}
      className={className}
    />
  );
}
