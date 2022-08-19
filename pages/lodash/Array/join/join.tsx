import type { NextPage } from 'next'
import { join } from 'lodash'

function runDemo1() {
  debugger
  const array = ['a', 'b', 'c']
  const newArray = join(array, '~')
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>join</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
