// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {eachAgeDetails} = props
  return (
    <>
      <h1>Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={eachAgeDetails}
          startAngle={0}
          endAgle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-90" fill=" #a3df9f" />
          <Cell name="Above 90" fill="#64c2a6" />
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

export default VaccinationByAge
