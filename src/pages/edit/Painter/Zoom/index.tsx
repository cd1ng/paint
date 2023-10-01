import React, { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { addZoom, subZoom } from 'src/store/paintSlice'

import Styled from './Styled'

const Zoom: FC = () => {
  const curZoom = useAppSelector((state) => state.paint.zoom)
  const dispatch = useAppDispatch()
  return (
    <Styled>
      <div className='btn' onClick={() => dispatch(subZoom())}>
        -
      </div>
      <div>{curZoom * 100 + '%'}</div>
      <div className='btn' onClick={() => dispatch(addZoom())}>
        +
      </div>
    </Styled>
  )
}

export default Zoom
