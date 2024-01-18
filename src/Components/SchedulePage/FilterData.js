import React from 'react'
import plans from './events';

const FilterData = (props) => {
    let selectedDate=props.selectedDate;
    let setEvents=props.setEvents;
    let setSelectedDate=props.setSelectedDate;

    function buttonHandler(date,data){
        setSelectedDate(date);
        console.log(selectedDate);
        setEvents(data);
    }
    
  return (
    <div className='bg-[#B0FFFA] px-4 pt-2 text-white rounded-t-2xl text-xl border-b border-b-richblack-800 filterData'>
        <div className='flex justify-evenly'>
            {
                plans.map((data)=>(
                    <button
                    key={data.id} onClick={()=>buttonHandler(data.date,data.data)}
                    className={`tableHead ${data.date===selectedDate ? "text-white transition duration-300 font-semibold bg-[rgb(32,112,106)] rounded-t-lg py-1":"text-richblack-800"}`}>
                        {data.date}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default FilterData;
