import type { NextPage } from 'next'
import { after } from 'lodash'

const done = after(3, function () {
  console.log('done saving!')
})

function runDemo1() {
  console.log('run!')
  done()
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>after</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
