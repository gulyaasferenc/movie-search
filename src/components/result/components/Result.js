import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'

import { ExpandMore } from '@mui/icons-material'
import { useGetWikiByTitle } from '../../../axios/hooks'

import './Result.css'
import { useEffect } from 'react'
import Loader from '../../loader/Loader'

const Result = ({ movie }) => {
  const {
    data: wikiData,
    error: wikiError,
    call: callWiki,
    loading: wikiLoading,
  } = useGetWikiByTitle({
    titles: movie.name,
    prop: 'extracts|extlinks|categories',
    exintro: true,
    explaintext: true,
    elquery: 'www.imdb.com',
    elprotocol: 'https',
  })

  useEffect(() => {
    if (wikiError) {
      window.alert('Error!')
    }
  }, [wikiError])

  const handleChange = (event, isExpanded) => {
    if (isExpanded) {
      callWiki()
    }
  }

  return (
    <div className='accordionContainer'>
      <Accordion onChange={handleChange}>
        <AccordionSummary className='summary' expandIcon={<ExpandMore />}>
          <Typography variant='h6'>
            {movie.name} ({new Date(movie.releaseDate).getFullYear()})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {wikiLoading ? (
            <Loader />
          ) : (
            <Card>
              <CardContent>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ textAlign: 'left' }}
                >
                  {wikiData?.extract ? (
                    <>
                      <b>From Wikipedia:</b> {wikiData.extract}
                    </>
                  ) : (
                    movie.overview
                  )}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  disabled={!wikiData?.pageid}
                  href={`https://en.wikipedia.org/wiki/${movie.name}`}
                  target='_blank'
                >
                  Check On Wiki
                </Button>
                <Button
                  disabled={!wikiData?.extlinks?.[0]['*']}
                  href={wikiData?.extlinks?.[0]['*']}
                  target='_blank'
                >
                  Check On IMDB
                </Button>
              </CardActions>
            </Card>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Result
