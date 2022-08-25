import type { NextPage } from 'next'
import { constant, updateWith } from 'lodash'

function runDemo1() {
  debugger
  const object = {}

  const res1 = updateWith(object, '[0][1]', constant('a'), Object)
  console.log(object)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>updateWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
