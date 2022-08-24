import type { NextPage } from 'next'
import { spread } from 'lodash'

function runDemo1() {
  const say = spread(function (who, what) {
    return who + ' says ' + what
  })

  const str = say(['fred', 'hello'])
  console.log(str)
}

function runDemo2() {
  const numbers = Promise.all([
    Promise.resolve(40),
    Promise.resolve(36)
  ])

  const pro = numbers.then(spread(function (x, y) {
    return x + y
  }))
  console.log(pro)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>spread</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
