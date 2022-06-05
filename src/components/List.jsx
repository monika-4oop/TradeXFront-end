import React from 'react'
import {Data} from './Data'

export const List = () => {
  const[image , setImage] =React.useState([]);
  const [list , SetData] = React.useState([])
  const[ Lunch , setLunch ] = React.useState("");
  const[ Land , setLand ] = React.useState("");
  const[Years , setYears] = React.useState("");


  React.useEffect( () => {

    // if(Years){
    //   fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${Years}`)
    // }

    if( Lunch === "" && Land === "" && Years === "" ) {
        fetchData('https://api.spacexdata.com/v3/launches?limit=100')
    }
    else{

      if( Lunch ) {
        fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${Lunch}`)
    }
    else{
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${Lunch}`)
    }

    if(  Land ){
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${Land}`)
    }
    else{
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${Land}`)
    }

    if(  Years ){
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${Years}`)
    }
    else{
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${Years}`)
    }


    if( Lunch && Land ){
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${Lunch}&land_success=${Land}`)
    }else{
      fetchData(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${Lunch}&land_success=${Land}`)
    } 

  }

  } , [Lunch , Land , Years ])

  const fetchData = async (link) => {

    fetch(link)
    .then((response) => response.json())
    .then((data) => {
         SetData(data)
        // console.log(data)
    })
    .catch((err) => {
      console.log("Error fetch" , err);
    })
}

if (list.length >= 0){
  var distinctYears = [
    ...new Set(list.map( x => x.launch_year))
  ]
 }

  return (
    <section className="row">
      
       <div className="col-md-2 col-sm-12">
       {
          distinctYears && distinctYears.map(distinct =>(
            <h1 key = { distinct}  onClick={ () => setYears( distinct )} >{distinct}</h1>
          ))
        }
      
      <h2>Success Lunch:  
          <button onClick={ () => setLunch(true) } >True</button>
          <button  onClick={ () => setLunch(false)} >False</button>
      </h2>

      <h2>Success Land:  
          <button onClick={ () => setLand(true) } >True</button>
          <button onClick={ () => setLand(false) } >False</button>
      </h2>
       </div>



      
     <div className="col-md-10 col-sm-12">
     <div className="row">
       <div className="">
       {
          list &&  list.map((d) =>(
                <Data key = {d.flight_number} user={d}/>
          ))
      }
       </div>
     </div>

     </div>
 

    </section>
  )
}
