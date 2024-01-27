// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    dashboardData: {},
  }

  componentDidMount() {
    this.getDashboardData()
  }

  onSuccessFetch = data => {
    const formattedData = data.map(eachItem => ({
      last7DaysVaccination: eachItem.last_7_days_vaccination,
      vaccinationByAge: eachItem.vaccination_by_age,
      vaccinationByGender: eachItem.vaccination_by_gender,
    }))

    this.setState({
      dashboardData: formattedData,
      isLoading: false,
    })
  }

  onFecthFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
        alt="failure view"
      />
    </div>
  )

  getDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    if (response.ok === true) {
      return this.onSuccessFetch(data)
    }
    return this.onFecthFailure()
  }

  renderFetchedData = () => {
    const {dashboardData} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="website logo"
        />
        <h1>CoWIN Vaccination in India</h1>
        {dashboardData.map(eachItem => (
          <>
            <VaccinationCoverage
              eachCoverageDetails={eachItem.last7DaysVaccination}
            />
            <VaccinationByAge eachAgeDetails={eachItem.vaccinationByAge} />
            <VaccinationByGender
              eachGenderDetails={eachItem.vaccinationByGender}
            />
          </>
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderFetchedData()
        )}
      </div>
    )
  }
}

export default CowinDashboard
