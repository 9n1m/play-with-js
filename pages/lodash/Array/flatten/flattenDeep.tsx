import type { NextPage } from 'next'
import { flattenDeep } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, [2, [3, [4]], 5]]
  const newArray = flattenDeep(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>flattenDeep</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
