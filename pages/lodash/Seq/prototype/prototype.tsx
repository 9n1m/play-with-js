import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger
  const wrapped: any = _([1, 2])

  const res1 = wrapped[Symbol.iterator]() === wrapped
  console.log(res1)

  const res2 = Array.from(wrapped)
  console.log(res2)
}

function runDemo2() {
  debugger
  const object: any = { 'a': [{ 'b': { 'c': 3 } }, 4] }

  const res = _(object).at(['a[0].b.c', 'a[1]']).value()
  console.log(res)
}

function runDemo3() {
  debugger
  const users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 }
  ]

  // A sequence without explicit chaining.
  const res1 = _(users).head()
  console.log(res1)

  // A sequence with explicit chaining.
  const res2 = _(users)
    .chain()
    .head()
    .pick('user')
    .value()
  console.log(res2)
}

function runDemo4() {
  debugger
  let array = [1, 2]
  let wrapped = _(array).push(3)

  console.log(array)

  wrapped = wrapped.commit()
  console.log(array)

  console.log(wrapped.last())

  console.log(array)
}

function runDemo5() {
  debugger
  const wrapped: any = _([1, 2])

  console.log(wrapped.next())
  console.log(wrapped.next())
  console.log(wrapped.next())
}

function runDemo6() {
  debugger
  function square(n: number) {
    return n * n
  }

  const wrapped = _([1, 2]).map(square)
  const other = wrapped.plant([3, 4])

  const res1 = other.value()
  console.log(res1)

  const res2 = wrapped.value()
  console.log(res2)
}

function runDemo7() {
  debugger
  const array = [1, 2, 3]

  const res = _(array).reverse().value()
  console.log(res)

  console.log(array)
}

function runDemo8() {
  debugger
  const array = [1, 2, 3]

  const res1 = _(array).toJSON()
  console.log(res1)

  const res2 = _(array).value()
  console.log(res2)

  const res3 = _(array).valueOf()
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>_.prototype</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>_.prototype[Symbol.iterator]()</button>
        <button className='button is-primary' onClick={() => runDemo2()}>_.prototype.at([paths])</button>
        <button className='button is-primary' onClick={() => runDemo3()}>_.prototype.chain()</button>
        <button className='button is-primary' onClick={() => runDemo4()}>_.prototype.commit()</button>
        <button className='button is-primary' onClick={() => runDemo5()}>_.prototype.next()</button>
        <button className='button is-primary' onClick={() => runDemo6()}>_.prototype.plant(value)</button>
        <button className='button is-primary' onClick={() => runDemo7()}>_.prototype.reverse()</button>
        <button className='button is-primary' onClick={() => runDemo8()}>_.prototype.toJSON()</button>
        <button className='button is-primary' onClick={() => runDemo8()}>_.prototype.value()</button>
        <button className='button is-primary' onClick={() => runDemo8()}>_.prototype.valueOf()</button>
      </div>
    </>
  )
}

export default Page
