import type { NextPage } from 'next'
import { sortedIndex } from 'lodash'

function runDemo1() {
  debugger
  const array = [30, 50]
  const newArray = sortedIndex(array, 40)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortedIndex</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
