import type { NextPage } from 'next'
import { bindAll } from 'lodash'

function runDemo1() {
  debugger
  const view = {
    'label': 'docs',
    'click': function () {
      console.log('clicked ' + this.label)
    }
  }

  bindAll(view, ['click'])
  document.addEventListener('click', view.click)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>bindAll</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
