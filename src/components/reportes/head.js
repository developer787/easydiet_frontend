import React from 'react'

const labels = (label) => (
    <th>{label}</th>
)
const head = () => (
  <thead>
    <tr>
    {labels('dom')}
    {labels('lun')}
    {labels('mar')}
    {labels('mie')}
    {labels('jue')}
    {labels('vie')}
    {labels('sab')}
    </tr>
  </thead>
)
export default head
