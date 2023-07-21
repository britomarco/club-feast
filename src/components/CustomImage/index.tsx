import { useEffect, useState } from 'react'
import Image from 'next/image'
import { IProps } from './interface'

export const CustomImage = ({ src, alt, width, height}: IProps) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      alt={alt}
      src={imgSrc ? imgSrc : '/thumbnail.jpg'}
      width={width}
      height={height}
      onError={() => {
        setImgSrc('/thumbnail.jpg')
      }}
    />
  )
}