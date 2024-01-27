// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {eachCoverageDetails} = props

  const DataFormatter = number => `${number.toString()}k`

  return (
    <>
      <h1>Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={eachCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: '',
            strokeWidth: 1,
          }}
        />

        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '',
            strokeWidth: 1,
          }}
        />

        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />

        <Bar dataKey="dose_1" name="dose_1" fill="#f54394" barSize="20%" />
        <Bar dataKey="dose_2" name="dose_2" fill="#5a8dee" barSize="20%" />
      </BarChart>
    </>
  )
}

export default VaccinationCoverage
