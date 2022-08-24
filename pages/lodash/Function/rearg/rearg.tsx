import type { NextPage } from 'next'
import { rearg } from 'lodash'

function runDemo1() {
  const rearged = rearg(function (a, b, c) {
    return [a, b, c]
  }, [2, 0, 1])

  const arr = rearged('b', 'c', 'a')
  console.log(arr)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>rearged</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
