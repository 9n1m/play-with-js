import type { NextPage } from 'next'
import { sortedIndexOf } from 'lodash'

function runDemo1() {
  debugger
  const array = [4, 5, 5, 5, 6]
  const newArray = sortedIndexOf(array, 5)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortedIndexOf</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
