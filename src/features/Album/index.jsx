import React from 'react'
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {}

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Tan Man cung Indie',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/e/2/3/5e2369c6765309b600cccd5e4f1ca738.jpg',
    },
    {
      id: 2,
      name: 'Tiem Nang V-Pop',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/4/9/c/449c8e1a4651df893f324cb19503c5f7.jpg',
    },
    {
      id: 3,
      name: 'K-Pop Rising',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/8/1/f/181fbe984a38091455002633949b5ea9.jpg',
    },
  ]

  return (
    <div>
      <h2>May you like this!</h2>
      <AlbumList albumList={albumList} />
    </div>
  )
}

export default AlbumFeature
