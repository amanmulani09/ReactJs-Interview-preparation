import './example.css'
type image = {
    image_url:string,
    caption:string
}
export const Slide = ({image,active}:{image:image,active:boolean}) => {
    console.log(active)
  return (
    <div className={`${active ? 'active slide' : 'slide'}`} >
        <img src={image.image_url} alt={image.caption} />
        <span>{image.caption}</span>
    </div>
  )
}
