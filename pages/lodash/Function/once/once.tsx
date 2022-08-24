import type { NextPage } from 'next'
import { once } from 'lodash'

const runDemo1 = function () {
  console.log('not once')
}

const runDemo2 = once(function () {
  console.log('once')
})

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>once</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
