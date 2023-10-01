import { styled } from '@linaria/react'

export default styled('div')`
  display: flex;
  position: absolute;
  left: 200px;
  bottom: 10px;
  width: 100px;
  height: 20px;
  background-color: #fff;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: orange;
    cursor: pointer;
  }
`
