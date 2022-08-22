import type { NextPage } from 'next'
import { reduceRight } from 'lodash'

function runDemo1() {
  debugger
  const array = [[0, 1], [2, 3], [4, 5]]
  const accumulatedValue = reduceRight(array, function (flattened, other) {
    return flattened.concat(other);
  }, []);
  console.log(accumulatedValue)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>reduceRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
