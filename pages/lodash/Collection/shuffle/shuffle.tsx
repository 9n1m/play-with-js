import type { NextPage } from 'next'
import { shuffle } from 'lodash'

function runDemo1() {
  debugger
  const shuffledArray = shuffle([1, 2, 3, 4])
  console.log(shuffledArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>shuffle</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
