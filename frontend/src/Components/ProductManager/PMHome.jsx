import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 //Cell
function PMHome() {

    const data = [
        {
          name: 'January',
          Men: 30,
          Women: 24,
          amt: 2400,
        },
        {
          name: 'February',
          Men: 30,
          Women: 13,
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
          Men: 0,
          Women: 0,
          amt: 2181,
        },
        {
          name: 'June',
          Men: 0,
          Women: 0,
          amt: 2500,
        },
        {
          name: 'July',
          Men: 0,
          Women: 0,
          amt: 2100,
        },
      ];
     

  return (
    <main className='pm-main-container'>
        <div className='pm-main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='pm-main-cards'>
            <div className='pm-card'>
                <div className='pm-card-inner'>
                    <h3>MEN'S ITEMS</h3>
                    <BsFillArchiveFill className='pm-card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='pm-card'>
                <div className='pm-card-inner'>
                    <h3>WOMEN'S ITEMS</h3>
                    <BsFillGrid3X3GapFill className='pm-card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='pm-card'>
                <div className='pm-card-inner'>
                    <h3>All PRODUCTS</h3>
                    <BsFillArchiveFill className='pm-card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='pm-card'>
                <div className='pm-card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='pm-card_icon'/>
                </div>
                <h1>0</h1>
            </div>
        </div>

        <div className='pm-charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
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
                <Bar dataKey="Men" fill="#8884d8" />
                <Bar dataKey="Women" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
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
                <Line type="monotone" dataKey="Men" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Women" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default PMHome