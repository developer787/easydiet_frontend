import React from 'react'
import Checkbox from './Checkbox'
const proteina = [
  'res',
  'pavo',
  'cerdo',
  'pollo',
  'pechuga',
  'caderas deshuesadas',
  'pescado',
  'mariscos',
  'bassa',
  'cod fillet',
  'salmon',
  'mero',
  'chillo',
  'camarones',
  'ceviche',
  'anillos de calamar'
]
const farinaceos = [
  'pasta','arroz','papa','batata','yuca','calabaza',
  'couscous', 'yautia', 'malanga', 'ñame', 'maiz']
const hortalizas = [
  'brecol','setas','esparragos','repollo','vegetales mixtos',
  'habichuelas tiernas', 'remolacha','zanahoria','berengena',
  'coliflor']
const createCheckboxes = (form) => {
  const toggleCheckbox = label => {
    const index = form.state.alergias.indexOf(label.toLowerCase(),0)
    const Alergias = form.state.alergias
    if (form.selectedCheckboxes.has(label)) {
      form.selectedCheckboxes.delete(label)
      if (index > -1) {
        Alergias.splice(index, 1)
        form.setState({alergias: Alergias})
      }
    } else {
      form.selectedCheckboxes.add(label);
      Alergias.push(label.toLowerCase())
      form.setState({alergias: Alergias})
    }
  }
  const createCheckbox = label => (
    <Checkbox
    label={label}
    handleCheckboxChange={toggleCheckbox}
    key={label}
    />
  )
  return (
        <tr>
          <td>
            {proteina.map(createCheckbox)}
          </td>
          <td>
            {farinaceos.map(createCheckbox)}
          </td>
          <td>
            {hortalizas.map(createCheckbox)}
          </td>
        </tr>
  )
}
export default createCheckboxes
