import React, { FC, useEffect, useRef } from 'react'

import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { addComponent, setCurChoose } from 'src/store/paintSlice'

import Zoom from './Zoom'

import classnames from 'classnames'

import Styled from './Styled'

const Painter: FC = () => {
  const canvasPosition = useRef({ left: 0, top: 0 })
  const paintRef = useRef<HTMLDivElement>(null)
  const totalComponents = useAppSelector((state) => state.paint.components)
  const curZoom = useAppSelector((state) => state.paint.zoom)
  const curIndex = useAppSelector((state) => state.paint.curIndex)
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
      receiveData.style.left = actualX / curZoom
      receiveData.style.top = actualY / curZoom
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
      <Zoom />
      {totalComponents.map((item, index) => {
        const classes = classnames('component-border', { select: curIndex === index })
        return (
          <div key={index} style={item.style} className={classes} onClick={() => dispatch(setCurChoose(index))}>
            {item.content}
          </div>
        )
      })}
    </Styled>
  )
}

export default Painter
