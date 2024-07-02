import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BsBorderWidth } from 'react-icons/bs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you are using
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chartbar() {
    const data = {
        labels:['January', 'February','March','April','May','June'],
        datasets: [
            {
                label: 'Products Sold',
                data: [65,59,80,81,56,55],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                BsBorderWidth: 1,

            },
        ],
    };

    const options = {
        scales:{
            y:{
                beginAtZero: true,
            },
        },
    };
  return (
   <Bar data= {data} options = {options} />
  )
}
