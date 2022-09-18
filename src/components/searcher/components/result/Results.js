import Result from './components/Result'

import './Results.css'

const Results = ({ queryResults }) => {
  return (
    <div className='resultsContainer'>
      {queryResults.length
        ? queryResults.map((result) => {
            return <Result movie={result} key={result.id} />
          })
        : 'NO RESULT'}
    </div>
  )
}

export default Results
