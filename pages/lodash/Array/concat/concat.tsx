import type { NextPage } from 'next'
import { concat } from 'lodash'

function runDemo1() {
  debugger
  const array = [1]
  const newArray = concat(array, 2, [3], [[4]])
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>concat</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
