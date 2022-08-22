import type { NextPage } from 'next'
import { intersection } from 'lodash'

function runDemo1() {
  debugger
  const array = [[2, 1], [4, 2], [1, 2]]
  const newArray = intersection(...array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>intersection</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
