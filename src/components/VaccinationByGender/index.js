// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {eachGenderDetails} = props
  return (
    <>
      <h1>Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={eachGenderDetails}
          startAngle={0}
          endAgle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#2d87bb" />
          <Cell name="Female" fill=" #a3df9f" />
          <Cell name="others" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </>
  )
}

export default VaccinationByGender
