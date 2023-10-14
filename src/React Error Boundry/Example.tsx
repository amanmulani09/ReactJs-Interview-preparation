import Slideshow from './Slideshow';

const Example = () => {
    const images = [
        {
          image_url:
            "https://plus.unsplash.com/premium_photo-1696879454010-6aed21c32fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          caption: "Image 1"
        },
        {
          image_url:
            "https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          caption: "Image 2"
        },
        {
          image_url:
            "https://images.unsplash.com/photo-1696928634052-41aa345ef686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          caption: "Image 3"
        },
        {
          image_url:
            "https://images.unsplash.com/photo-1696986681436-f5ee12981bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          caption: "Image 4"
        }
      ];
  return (
    <div>
        <Slideshow images={images} />
    </div>
  )
}

export default Example