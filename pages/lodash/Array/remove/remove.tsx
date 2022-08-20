import type { NextPage } from 'next'
import { remove } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3, 4]
  const newArray = remove(array, n => n % 2 === 0)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>remove</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
