import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger

  const res = _('  abc  ')
    .chain()
    .trim()
    .thru(function (value) {
      return [value]
    })
    .value()

  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>thru</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
