import { useDispatch } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'
import { useSelector } from 'react-redux'

const options = [
  { id: 1, name: 'Photos' },
  { id: 2, name: 'Videos' },
  { id: 3, name: 'GIFs' },
]

const Options = () => {

  const dispatch=useDispatch()
  const selector=useSelector(state=>state.search.activeTab)
  
  return (
    <div className='flex gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-3 py-2 shadow-xl'>
          
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => {
                dispatch(setActiveTabs(option.name));
              }}
              className={`px-4 py-1 rounded-full text-sm font-medium transition
                ${
                  selector === option.name
                    ? 'bg-white text-purple-900 shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
            >
              {option.name}
            </button>
          ))}

        </div>
  )
}

export default Options;