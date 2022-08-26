import type { NextPage } from 'next'
import { toPath } from 'lodash'

function runDemo1() {
  debugger
  const r1 = toPath('a.b.c')
  console.log(r1)

  const r2 = toPath('a[0].b.c')
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toPath</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
