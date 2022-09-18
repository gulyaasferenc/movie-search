import './App.css'
import Searcher from './components/searcher/Searcher'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>Movie finder</header>
        <div className='content'>
          <Searcher />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
