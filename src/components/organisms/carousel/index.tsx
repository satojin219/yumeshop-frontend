import './image-gallery.css';
import { VFC } from 'react';
import ImageGallery from 'react-image-gallery';


interface CalrouselProps {
  images: { original: string; }[];
}

export const Calrousel: VFC<CalrouselProps> = (props) => {
  const { images } = props;

  return (
      <ImageGallery
        items={images}
        infinite
        autoPlay
        showBullets
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
      />
  );
};
