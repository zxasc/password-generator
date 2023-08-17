import React from 'react'
import ReactDOM from 'react-dom/client'
import Viewer from './components/viewer'
import Include from './components/include'
import Length from './components/length'
import Strength from './components/strength'
import Generate from './components/generate'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <section className="main-row low-padding">
        <h2 style={{margin: "0", textAlign: "center"}}>Password Generator</h2>
      </section>
      <section className="main-row lightgray-bg">
        <Viewer />
      </section>

      <section className="main-row lightgray-bg">
        <Length />
        <Include 
          name='Uppercase Letters'
          type='uppercase'
          isDefaultChecked={true}
        />
        <Include 
          name='Lowercase Letters'
          type='lowercase'
          isDefaultChecked={true}
        />
        <Include
          name='Numbers'
          type='numbers'
          isDefaultChecked={false}
        />
        <Include
          name='Symbols'
          type='symbols'
          isDefaultChecked={false}
        />
        <Strength />
        <Generate />
      </section>
    </Provider>
  </React.StrictMode>,
)
