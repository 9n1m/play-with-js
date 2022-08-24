import type { NextPage } from 'next'
import { throttle } from 'lodash'

const runDemo1 = throttle(() => {
  console.log(window.innerWidth)
}, 1000)

const runDemo2 = throttle(() => {
  console.log(window.innerWidth)
}, 1000, {
  leading: true,
  trailing: false
})

const runDemo3 = throttle(() => {
  console.log(window.innerWidth)
}, 1000, {
  leading: false,
  trailing: true
})

const runDemo4 = throttle(() => {
  console.log(window.innerWidth)
}, 1000, {
  leading: false,
  trailing: false
})

const runDemo5 = throttle(() => {
  console.log(window.innerWidth)
}, 0, {
  leading: false
})

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>throttle</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
        <button className='button is-primary' onClick={() => runDemo3()}>runDemo3</button>
        <button className='button is-primary' onClick={() => runDemo4()}>runDemo4</button>
        <button className='button is-primary' onClick={() => runDemo5()}>runDemo5</button>
      </div>
    </>
  )
}

export default Page
