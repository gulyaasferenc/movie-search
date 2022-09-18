import './Searcher.css'

import { Input, Button } from '@mui/material'
import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'

import { SEARCH_MOVIES } from '../../graphql'

import Results from './components/result/Results'
import Loader from '../loader/Loader'

const Searcher = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchValueToSend, setSearchValueToSend] = useState('')

  const [search, { loading, error, data }] = useLazyQuery(SEARCH_MOVIES, {
    variables: { query: searchValueToSend },
  })

  const onHitButton = () => {
    setSearchValueToSend(searchValue)
    search()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onHitButton()
    }
  }

  return (
    <div className='mainContainer'>
      <div className='searcher-container'>
        <Input
          fullWidth
          onChange={(val) => setSearchValue(val.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          className='search-button'
          variant='outlined'
          onClick={onHitButton}
        >
          SEARCH
        </Button>
      </div>
      <>{loading && <Loader />}</>
      <>{data && <Results queryResults={data.searchMovies} />}</>
    </div>
  )
}

export default Searcher
