const CourseName = ({filterData, setCategory}) => {
  return (
    <div className='text-white bg-black/80 p-4 rounded-md flex gap-4'>
      {filterData.map((item)=>(
        <button
          key={item.id}
          onClick={()=>setCategory(item.title)}
          className='border border-white p-2 rounded-md ml-10 cursor-pointer'
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}

export default CourseName