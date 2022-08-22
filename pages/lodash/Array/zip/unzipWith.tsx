import type { NextPage } from 'next'
import { add, unzipWith, zip } from 'lodash'

function runDemo1() {
  debugger
  const zipped = zip([1, 2], [10, 20], [100, 200])
  console.log(zipped)
  const newArray = unzipWith(zipped, add)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>unzipWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
