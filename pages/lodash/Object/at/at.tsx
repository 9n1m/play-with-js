import type { NextPage } from 'next'
import { at } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

  const res1 = at(object, ['a[0].b.c', 'a[1]'])
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>at</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
