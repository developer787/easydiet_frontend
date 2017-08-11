import React from 'react'

const labels = (label) => (
    <th>{label}</th>
)
const head = (day1, day2) => (
  <thead>
    <tr>
    {labels(day1)}
    {labels(day2)}
    </tr>
  </thead>
)
export default head
