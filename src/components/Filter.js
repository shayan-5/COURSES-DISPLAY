import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {
        filterData.map( (data) => (
            <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
             bg-black hover:border-white hover:scale-105 
            ${category === data.title ? 
            "text-black bg-white" :
            "text-white bg-black"}
            `}
             key={data.id}
             onClick ={() => filterHandler(data.title)}
             >{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter
