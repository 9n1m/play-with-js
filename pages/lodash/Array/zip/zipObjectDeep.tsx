import type { NextPage } from 'next'
import { zipObjectDeep } from 'lodash'

function runDemo1() {
  debugger
  const newArray = zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>zipObject</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
