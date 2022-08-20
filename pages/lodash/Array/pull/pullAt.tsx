import type { NextPage } from 'next'
import { pullAt } from 'lodash'

function runDemo1() {
  debugger
  const array = ['a', 'b', 'c', 'd']
  const newArray = pullAt(array, [1, 3])
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>pullAt</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
