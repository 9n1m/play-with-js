import type { NextPage } from 'next'
import { delay } from 'lodash'

function runDemo1() {
  const id = delay(function(text) {
    console.log(text)
  }, 500, 'later')

  console.log(id)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>delay</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
