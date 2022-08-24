import type { NextPage } from 'next'
import { cloneDeep } from 'lodash'

function runDemo1() {
  debugger
  const objects = [{ 'a': 1 }, { 'b': 2 }]

  const shallow = cloneDeep(objects)
  console.log(shallow)
  console.log(shallow[0] === objects[0])
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>cloneDeep</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
