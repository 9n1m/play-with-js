import type { NextPage } from 'next'
import { pull } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3, 1, 2, 3]
  const newArray = pull(array, 2, 3)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>pull</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
