import React from 'react';
import FilterData from './FilterData';
import ScheduleTable from './ScheduleTable';
import plans from './events';
import bg from '../../assets/logo.png'
import './SchedulePage.css'
import { useEffect, useState } from 'react';
import Loader from "../AlertAndLoader/Loader";

const SchedulePage = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    const[selectedDate,setSelectedDate]=useState(plans[0].date);
    console.log(selectedDate);
    const[events,setEvents]=useState(plans[0].data);
    console.log(events);

  return (
    <div>
        {
            loading ? (<Loader/>): (
                <div className='overflow-hidden app'>
                    <img src={bg} width={70} height={70} className='p-1'/>
                    <div className="flex flex-col items-center overflow-hidden font-semibold innerBox h-fit">
                        <p className='heading font-normal text-center'>Schedule</p>
                        <FilterData setEvents={setEvents} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                        <ScheduleTable events={events}/>
                    </div>
                </div>
            )
        }
    </div>
)
}

export default SchedulePage;
