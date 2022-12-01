import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const Banner = () => {
  const images = [
    {
      original: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ]
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Banner
