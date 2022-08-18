import type { NextPage } from 'next'
import { compact } from 'lodash'

function runDemo1() {
  debugger
  const array = [0, 1, false, 2, '', 3]
  const newArray = compact(array)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>compact</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
