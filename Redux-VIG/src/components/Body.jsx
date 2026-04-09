import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGIFs, fetchImage, fetchVideo } from '../api/mediaApi'
import { setResults } from '../redux/features/searchSlice'

const Body = () => {
  const query = useSelector(state => state.search.query)
  const currTab = useSelector(state => state.search.activeTab)
  const results = useSelector(state => state.search.results) || []

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const clickHandler = (item) => {
    const prevData = JSON.parse(localStorage.getItem('myMedia') || '[]')
    const exists = prevData.find(i => i.id === item.id)
    if (!exists) {
      prevData.push(item)
      localStorage.setItem('myMedia', JSON.stringify(prevData))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) return

      setLoading(true)

      try {
        let formattedData = []

        if (currTab === 'Photos') {
          const response = await fetchImage(query)
          formattedData = response.data.photos.map(file => ({
            totalPages: response.data.total_results,
            id: file.id,
            url: file.src?.original || '',
            name: file.alt || 'No title',
            type: 'Photo'
          }))
        } else if (currTab === 'Videos') {
          const data = await fetchVideo(query)
          formattedData = data.data.videos.map(file => ({
            totalPages: data.data.total_results,
            id: file.id,
            url:
              file.video_files?.find(v => v.quality === 'hd')?.link ||
              file.video_files?.[0]?.link ||
              '',
            name: file.user?.name || 'No title',
            type: 'Video'
          }))
        } else if (currTab === 'GIFs') {
          const data = await fetchGIFs(query)
          formattedData = data.data.data.map(file => ({
            totalPages: data.data.pagination.total_count,
            id: file.id,
            url: file.images?.fixed_height?.url || '',
            name: file.title || 'No title',
            type: 'GIF'
          }))
        }

        dispatch(setResults(formattedData))
      } catch (err) {
        console.log('Error While Fetching APIs:', err)
      } finally {
        setLoading(false)
      }
    }

    const delayDebounce = setTimeout(() => {
      fetchData()
    }, 400)

    return () => clearTimeout(delayDebounce)
  }, [currTab, query, dispatch])

  if (!query) return null

  return (
    <div className="mt-20 px-6">
      {loading && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="h-60 bg-gray-200 animate-pulse rounded-2xl"></div>
          ))}
        </div>
      )}

      {!loading && !results.length && (
        <div className="text-center mt-20 text-gray-500">No results found</div>
      )}

      {!loading && results.length > 0 && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map(item => (
            <div key={item.id} className='group'>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                <a href={item.url} target="_blank" className="group">
                  <div className="relative overflow-hidden">
                    {(item.type === 'Photo' || item.type === 'GIF') && (
                      <img
                        src={item.url}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
                        className="w-full h-100 object-cover group-hover:scale-110 transition duration-500"
                      />
                    )}

                    {item.type === 'Video' && (
                      <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        preload="none"
                        className="w-full h-100 object-cover group-hover:scale-110 transition duration-500"
                      />
                    )}

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                      View
                    </div>
                  </div>
                </a>

                <div className="p-4">
                  <h1 className="text-lg font-semibold text-gray-800 truncate">
                    {item.name}
                  </h1>

                  <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                    <span
                      className="text-blue-600 px-2 py-1 rounded-md font-medium cursor-pointer hover:scale-105 transition hover:font-extrabold ease-in-out border"
                      onClick={() => clickHandler(item)}
                    >
                      Add
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Body