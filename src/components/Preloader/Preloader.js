import { ProgressBar } from 'react-loader-spinner'

export const Preloader = () => {
  return <ProgressBar
    height="800"
    width="130"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor='#61614e'
    barColor='#D1D1A7'
  />
}