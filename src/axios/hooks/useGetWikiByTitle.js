import { useState } from 'react'
import { fetchWiki } from '../axios'

const useGetWikiByTitle = (params) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const call = async () => {
    try {
      setLoading(true)
      const data = await fetchWiki.get('', {
        params,
      })
      const baseData = Object.values(data.data.query?.pages)
      setData(baseData[0])
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  return {
    data,
    loading,
    error,
    call,
  }
}

export default useGetWikiByTitle
