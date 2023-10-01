import { FC } from 'react'
import { Button } from 'antd'

import { useAppDispatch, useAppSelector } from 'src/store/hooks'

import Styled from './Styled'
import { clearComponents } from 'src/store/paintSlice'

const normalStyle = {
  content: '默认文本',
  style: {
    width: 170,
    height: 30,
    lineHeight: '30px',
    fontSize: 12,
    fontWeight: 'normal',
    textDecoration: 'none',
    color: '#000',
    backgroundColor: '#ffffff00',
    textAlign: 'left',
    wordSpacing: '10px',
  },
}

const LeftAside: FC = () => {
  const dispatch = useAppDispatch()

  const handleDrag = (e: DragEvent) => {
    e.dataTransfer.setData('value', JSON.stringify(normalStyle))
  }
  const handleClearCmp = () => {
    dispatch(clearComponents())
  }

  return (
    <Styled>
      <div className='list'>
        <div className='item' id='item1' draggable='true' onDragStart={handleDrag}>
          文本
        </div>
        <div className='item' id='item2' draggable='true' onDragStart={handleDrag}>
          图片
        </div>
        <Button type='primary' onClick={handleClearCmp}>
          清空
        </Button>
      </div>
    </Styled>
  )
}

export default LeftAside
