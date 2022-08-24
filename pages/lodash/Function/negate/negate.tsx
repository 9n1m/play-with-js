import type { NextPage } from 'next'
import { filter, negate } from 'lodash'

function runDemo1() {
  function isEven(n: number) {
    return n % 2 == 0
  }

  const arr1 = filter([1, 2, 3, 4, 5, 6], isEven)
  console.log(arr1)

  const arr2 = filter([1, 2, 3, 4, 5, 6], negate(isEven))
  console.log(arr2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>negate</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
