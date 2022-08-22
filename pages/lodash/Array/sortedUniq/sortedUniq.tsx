import type { NextPage } from 'next'
import { sortedUniq } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 1, 2]
  const newArray = sortedUniq(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortedUniq</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
