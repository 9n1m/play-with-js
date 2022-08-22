import type { NextPage } from 'next'
import { sample } from 'lodash'

function runDemo1() {
  debugger

  const randomElement = sample([1, 2, 3, 4])
  console.log(randomElement)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sample</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
