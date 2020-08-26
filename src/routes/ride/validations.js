import Validator from 'validatorjs'

const Lat = (Lat) => {
  let val = true
  if (Lat < -90 || Lat > 90) {
    val = false
  }
  return val
}
const Long = (Long) => {
  let val = true
  if (Long < -180 || Long > 180) {
    val = false
  }
  return val
}

export const post = ({ body }) => {
  Validator.register('Lat', function (digit, requirement, attribute) {
    return Lat(digit)
  }, 'The :attribute min -90 and max 90.')
  Validator.register('Lang', function (digit, requirement, attribute) {
    return Long(digit)
  }, 'The :attribute min -180 and max 180.')
  const rules = {
    start_lat: 'required|Lat',
    start_long: 'required|Lang',
    end_lat: 'required|Lat',
    end_long: 'required|Lang',
    rider_name: 'required',
    driver_name: 'required',
    driver_vehicle: 'required'
  }
  return new Validator(body, rules)
}
