import { styled } from '@linaria/react'

export default styled('div')`
  width: 100%;
  height: 100%;
  background-color: #fff;
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .item {
      width: 40px;
      height: 40px;
      background-color: #999;
    }
  }
`
