import React from 'react';
import './Pages.css';
import '../Fonts/fonts.css';

const list = [
    {
        id: '1',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: '2',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: '3',
        firstname: 'Mick',
        lastname: 'Torn',
        year: 1982,
      },
  ];
  
  const allVarieties = [list];
  
  const AllVarieties = () => (
    <div className='wrapper'>
        <>
        {allVarieties.map((allVarieties, index) => (
            <ul key={index} className="listStyle">
            {allVarieties.map(item => (
                <li key={item.id} className="itemStyle">
                <div>{item.firstname}</div>
                <div>{item.lastname}</div>
                <div>{item.year}</div>
                </li>
            ))}
            </ul>
        ))}
        </>
    </div>
  );
export default AllVarieties;