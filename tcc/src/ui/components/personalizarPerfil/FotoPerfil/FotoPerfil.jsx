import React, { useState, useEffect } from 'react'
import "./styleFotoPerfil.css"

const FotoPerfil = ({onChange}) => {


  const [images, setImage] = useState([])
  const [imageURL, setImageURL] = useState([])

  useEffect(() => {
    if (images.length < 1) return

    const newImageUrl = []
    images.forEach(image => newImageUrl.push(URL.createObjectURL(image)))
    setImageURL(newImageUrl)

  }, [images])

  function onImageChange(e) {
    setImage([...e.target.files])
  }

  return (
    <>
    <label className='picture' itemID='picture__input' tabIndex="0" onChange={(e) => onChange(e.target.value)}>
      <input type="file" multiple accept='image/*' id='picture__input' onChange={onImageChange}/>
        {imageURL.map(imageSrc => <img src={imageSrc} className='picture__img' />)}
    </label>
    </>
  )
}

export default FotoPerfil