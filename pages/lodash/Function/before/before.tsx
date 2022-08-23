import type { NextPage } from 'next'
import { before } from 'lodash'

const save = before(3, function () {
  console.log('done saving!')
})

function runDemo1() {
  console.log('run!')
  save()
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>before</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
