import Validator from 'validatorjs'

export const post = ({ body }) => {
  const rules = {
    start_lat: 'required|digits_between:-90,90',
    start_long: 'required|digits_between:-180,180',
    end_lat: 'required|digits_between:-90,90',
    end_long: 'required|digits_between:-180,180',
    rider_name: 'required',
    driver_name: 'required',
    driver_vehicle: 'required'
  }
  return new Validator(body, rules)
}
