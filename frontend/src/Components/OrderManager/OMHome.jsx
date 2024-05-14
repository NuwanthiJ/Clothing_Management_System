import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 //Cell
function OMHome() {

    const data = [
        {
          name: 'January',
          Men: 50,
          Women: 30,
          amt: 2400,
        },
        {
          name: 'February',
          Men: 20,
          Women: 15,
          amt: 2210,
        },
        {
          name: 'March',
          Men: 20,
          Women: 40,
          amt: 2290,
        },
        {
          name: 'April',
          Men: 30,
          Women: 47,
          amt: 2000,
        },
        {
          name: 'May',
          Men: 15,
          Women: 5,
          amt: 2181,
        },
        {
          name: 'June',
          Men: 18,
          Women: 0,
          amt: 2500,
        },
        {
          name: 'July',
          Men: 0,
          Women: 10,
          amt: 2100,
        },
      ];
     

  return (
    <main className='om-main-container'>
        <div className='om-main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='om-main-cards'>
            <div className='om-card'>
                <div className='om-card-inner'>
                    <h3>MEN'S ITEMS IN CART</h3>
                    <BsFillArchiveFill className='om-card_icon'/>
                </div>
                <h1>50</h1>
            </div>
            <div className='om-card'>
                <div className='om-card-inner'>
                    <h3>WOMEN'S ITEMS IN CART</h3>
                    <BsFillGrid3X3GapFill className='om-card_icon'/>
                </div>
                <h1>30</h1>
            </div>
            <div className='om-card'>
                <div className='om-card-inner'>
                    <h3>WHOLE CART ITEMS</h3>
                    <BsPeopleFill className='om-card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='om-card'>
                <div className='om-card-inner'>
                    <h3>ITEM CAPACITY</h3>
                    <BsFillBellFill className='om-card_icon'/>
                </div>
                <h1>0</h1>
            </div>
        </div>

        <div className='om-charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={400}
            height={100}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Men" fill="#68390f" />
                <Bar dataKey="Women" fill="#ffbb29" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={400}
                height={100}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Men" stroke="#68390f" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Women" stroke="#ffbb29" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default OMHome