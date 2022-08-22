import type { NextPage } from 'next'
import { unzip, zip } from 'lodash'

function runDemo1() {
  debugger
  const zipped = zip(['a', 'b'], [1, 2], [true, false])
  console.log(zipped)
  const newArray = unzip(zipped)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>unzip</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
