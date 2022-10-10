import React from 'react'
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Statistic = () => {
  const load = useLoaderData()
  const { data } = load
  return (
    <div className='w-11/12 lg:w-3/4 mx-auto'>
      <p className='py-12 text-2xl font-bold text-center'>Statistics about our quizes</p>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey='total' />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Statistic