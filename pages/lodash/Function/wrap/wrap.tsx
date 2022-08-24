import type { NextPage } from 'next'
import { wrap, escape } from 'lodash'

const runDemo1 = function () {
  const p = wrap(escape, function (func, text: string) {
    return '<p>' + func(text) + '</p>'
  })

  console.log(p('fred, barney, & pebbles'))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>wrap</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
