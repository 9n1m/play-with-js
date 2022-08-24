import type { NextPage } from 'next'
import { castArray } from 'lodash'

function runDemo1() {
  debugger
  const arr1 = castArray(1)
  console.log(arr1)

  const arr2 = castArray({ 'a': 1 })
  console.log(arr2)

  const arr3 = castArray('abc')
  console.log(arr3)

  const arr4 = castArray(null)
  console.log(arr4)

  const arr5 = castArray(undefined)
  console.log(arr5)

  const arr6 = castArray()
  console.log(arr6)

  const array = [1, 2, 3]
  console.log(castArray(array) === array)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>castArray</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
