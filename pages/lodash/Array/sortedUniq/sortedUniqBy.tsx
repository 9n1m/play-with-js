import type { NextPage } from 'next'
import { sortedUniqBy } from 'lodash'

function runDemo1() {
  debugger
  const array = [1.1, 1.2, 2.3, 2.4]
  const newArray = sortedUniqBy(array, Math.floor)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortedUniqBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
