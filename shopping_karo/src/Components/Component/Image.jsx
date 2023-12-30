import { useState } from "react"

const Image = ({ img = [] }) => {

    const [thumbnail, setThumbnail] = useState(img[0])
  
    return (
      <div className="image-container">
        <div className="image d-flex justify-content-center">
          <img src={thumbnail} alt="image" />
        </div>
  
        <div className="images d-flex overflow-x-scroll gap-2">
          {img.map((image, index) => {
            return (<img src={image} alt="image" width="100px" height="100px" key={index}
              onClick={() => setThumbnail(image)}
            />)
          })}
        </div>
      </div>
    )
}

export default Image