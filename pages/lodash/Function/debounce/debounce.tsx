import type { NextPage } from 'next'
import { debounce } from 'lodash'

const runDemo1 = debounce(() => {
  console.log(window.innerWidth)
}, 1000)

const runDemo2 = debounce(() => {
  console.log(window.innerWidth)
}, 1000, {
  leading: true,
  trailing: false
})

const runDemo3 = debounce(() => {
  console.log(window.innerWidth)
}, 1000, {
  leading: true,
  trailing: true
})

const runDemo4 = debounce(() => {
  console.log(window.innerWidth)
}, 0, {
  leading: false,
})

const runDemo5 = debounce(() => {
  console.log(window.innerWidth)
}, 1000, {
  maxWait: 2000
})

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>debounce</h2>
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
