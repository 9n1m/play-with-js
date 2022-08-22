import type { NextPage } from 'next'
import { sortedLastIndexOf } from 'lodash'

function runDemo1() {
  debugger
  const array = [4, 5, 5, 5, 6]
  const newArray = sortedLastIndexOf(array, 5)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortedLastIndexOf</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
