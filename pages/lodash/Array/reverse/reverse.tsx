import type { NextPage } from 'next'
import { reverse } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3, 4]
  const newArray = reverse(array)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>reverse</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
