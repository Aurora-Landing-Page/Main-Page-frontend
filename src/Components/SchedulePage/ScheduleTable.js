import React from 'react'
import {Table,Thead,Tbody,Th,Td,Tr} from 'react-super-responsive-table';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const ScheduleTable = (props) => {
    let events=props.events;

  return (
      <div className=' bg-[#B0FFFA] px-11 text-richblue-800 opacity-[0.95] pt-1 scheduleTable mb-10'>
            <Table >
                <Thead >
                    <Tr className="text-left">
                        <Th className="name">Name</Th>
                        <Th className="time">Time</Th>
                        <Th >Venue</Th>
                    </Tr>
                </Thead>

                <Tbody className=" ">
                    {
                        events.map((data)=>(
                            <Tr className=" ">
                                <Td className="flex mb-[9px] ">
                                    <div className='leading-3'>
                                        <p className='text-xl'>{data.Title}</p>
                                        <p className='text-sm'>{data.Content}</p>
                                    </div>
                                </Td>
                                <Td>
                                    <div className='text-xl'>
                                        {data.Time}
                                    </div>
                                </Td>
                                <Td className="text-xl  ">
                                    <div>
                                        {data.Venue}
                                    </div>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
      </div>
  )
}

export default ScheduleTable
