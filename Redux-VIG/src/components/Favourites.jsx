import React, { useEffect, useState } from 'react'
import Header from './Header'
const Favorites = () => {
  const [items, setItems] = useState([])

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem('myMedia') || '[]')
    setItems(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const removeItem = (id) => {
    const updated = items.filter(item => item.id !== id)
    localStorage.setItem('myMedia', JSON.stringify(updated))
    setItems(updated)
  }

  if (!items.length) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        No favorites yet
      </div>
    )
  }

  return (
    <div>
    <Header/>

    <div className="mt-20 px-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(item => (
          <div key={item.id} className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="relative overflow-hidden">

                  {(item.type === 'Photo' || item.type === 'GIF') && (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-100 object-cover group-hover:scale-110 transition duration-500"
                    />
                  )}

                  {item.type === 'Video' && (
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
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
                    className="text-red-500 px-2 py-1 rounded-md font-medium cursor-pointer hover:scale-105 transition border"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
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
    </div>
    </div>
  )
}

export default Favorites