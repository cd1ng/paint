import { FC } from 'react'

import Styled from './Styled'

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
  const handleDrag = (e: DragEvent) => {
    e.dataTransfer.setData('value', JSON.stringify(normalStyle))
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
      </div>
    </Styled>
  )
}

export default LeftAside
