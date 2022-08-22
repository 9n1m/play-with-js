import type { NextPage } from 'next'
import { uniq } from 'lodash'

function runDemo1() {
  debugger
  const newArray = uniq([2, 1, 2])
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>uniq</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
