import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const ReChart = ({ dataCharst }) => {
  
  return (
    <div className="mb-[30px]  ">
      <div className="md:block hidden">
        <ResponsiveContainer width="90%" height={250}>
          <BarChart data={dataCharst} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" stroke="#8884d8" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="count" fill="#FF8811" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="block md:hidden">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart width="100%" height={250} data={dataCharst}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="count" fill="#FF8811" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReChart;