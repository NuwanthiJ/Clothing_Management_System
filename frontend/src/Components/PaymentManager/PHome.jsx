import React from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

function PaymentDashboard() {
  const data = [
    { name: 'January', payments: 1200, expenses: 800 },
    { name: 'February', payments: 1800, expenses: 1200 },
    { name: 'March', payments: 1400, expenses: 1000 },
    { name: 'April', payments: 2000, expenses: 1500 },
    { name: 'May', payments: 1600, expenses: 1100 },
    { name: 'June', payments: 0, expenses: 0 },
    { name: 'July', payments: 0, expenses: 0 },
  ];

  const totalPayments = data.reduce((total, item) => total + item.payments, 0);
  const totalExpenses = data.reduce((total, item) => total + item.expenses, 0);
  const totalCustomers = 250; // Example value
  const totalProfit = totalPayments - totalExpenses;
  const profitRate = ((totalProfit / totalPayments) * 100).toFixed(2);

  return (
    <main className='pm-main-container'>
      <div className='pm-main-title'>
        <h3>PAYMENT DASHBOARD</h3>
      </div>

      <div className='pm-main-cards'>
        <div className='pm-card'>
          <div className='pm-card-inner'>
            <h3>Total Payments</h3>
            <BsFillArchiveFill className='pm-card_icon' style={{ color: 'green' }} />
          </div>
          <h1>{totalPayments}</h1>
        </div>
        <div className='pm-card'>
          <div className='pm-card-inner'>
            <h3>Total Expenses</h3>
            <BsFillGrid3X3GapFill className='pm-card_icon' style={{ color: 'red' }} />
          </div>
          <h1>{totalExpenses}</h1>
        </div>
        <div className='pm-card'>
          <div className='pm-card-inner'>
            <h3>Total Customers</h3>
            <BsPeopleFill className='pm-card_icon' style={{ color: 'blue' }} />
          </div>
          <h1>{totalCustomers}</h1>
        </div>
        <div className='pm-card'>
          <div className='pm-card-inner'>
            <h3>Total Profit</h3>
            <BsFillBellFill className='pm-card_icon' style={{ color: 'green' }} />
          </div>
          <h1>${totalProfit}</h1>
        </div>
        <div className='pm-card'>
          <div className='pm-card-inner'>
            <h3>Profit Rate</h3>
            <BsFillBellFill className='pm-card_icon' style={{ color: 'yellow' }} />
          </div>
          <h1>{profitRate}%</h1>
        </div>
      </div>

      <div className='pm-charts'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='payments' fill='green' />
            <Bar dataKey='expenses' fill='red' />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='payments' stroke='green' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='expenses' stroke='red' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default PaymentDashboard;
