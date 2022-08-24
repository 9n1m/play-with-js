import type { NextPage } from 'next'
import { rest, initial, size, last } from 'lodash'

function runDemo1() {
  const say = rest(function (what, names) {
    return what + ' ' + initial(names).join(', ') +
      (size(names) > 1 ? ', & ' : '') + last(names)
  })

  const str = say('hello', 'fred', 'barney', 'pebbles')
  console.log(str)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>rest</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
