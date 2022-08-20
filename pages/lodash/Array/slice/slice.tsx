import type { NextPage } from 'next'
import { slice } from 'lodash'

function runDemo1() {
  debugger
  const array = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  const newArray = slice(array, 1, 3)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>slice</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
