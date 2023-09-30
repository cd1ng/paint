import React, { FC, useEffect, useRef } from 'react'

import Styled from './Styled'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { addComponent } from 'src/store/paintSlice'

const Painter: FC = () => {
  const canvasPosition = useRef({ left: 0, top: 0 })
  const paintRef = useRef<HTMLDivElement>(null)
  const totalComponents = useAppSelector((state) => state.paint.components)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const { left = 0, top = 0 } = paintRef.current?.getBoundingClientRect()
    canvasPosition.current = { left, top }
  }, [])

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    const actualX = e.pageX - canvasPosition.current.left
    const actualY = e.pageY - canvasPosition.current.top
    const receiveData = JSON.parse(e.dataTransfer?.getData('value'))

    if (receiveData) {
      receiveData.style.position = 'absolute'
      receiveData.style.left = actualX
      receiveData.style.top = actualY
    }
    console.log(receiveData)
    dispatch(addComponent(receiveData))
  }

  const handleDragOver = (e: MouseEvent) => {
    // 目标元素默认是不能够被拖放的，即不会触发 ondrop 事件，可以通过在目标元素的 ondragover 事件中取消默认事件来解决此问题。
    e.preventDefault()
  }

  return (
    <Styled ref={paintRef} onDragOver={handleDragOver} onDrop={handleDrop}>
      {totalComponents.map((item, index) => (
        <div key={index} style={item.style}>
          {item.content}
        </div>
      ))}
    </Styled>
  )
}

export default Painter
