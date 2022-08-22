import type { NextPage } from 'next'
import { flatten } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, [2, [3, [4]], 5]]
  const newArray = flatten(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>head</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
