import React from 'react'

export const Filter = ({list}) => {

  // const [data , SetData] = React.useState([]);


  //   if (list.length >= 0){
  //     var distinctYears = [
  //       ...new Set(list.map( x => x.launch_year))
  //     ]
  //    }

  // console.log( distinctYears );

  return (
    <div>
      {/* {
      distinctYears && distinctYears.map(distinct =>(
        <h1 key = { distinct} >{distinct}</h1>
      ))
      } */}
      <h2>Success Lunch:  
          <button>True</button>
          <button>False</button>
      </h2>

      <h2>Success Land:  
          <button>True</button>
          <button>False</button>
      </h2>

      </div>
  )
}
