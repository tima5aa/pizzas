import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="552" y="228" rx="3" ry="3" width="88" height="6" /> 
    <rect x="590" y="317" rx="3" ry="3" width="52" height="6" /> 
    <rect x="542" y="347" rx="3" ry="3" width="410" height="6" /> 
    <rect x="542" y="363" rx="3" ry="3" width="380" height="6" /> 
    <rect x="542" y="379" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="802" cy="366" r="20" /> 
    <circle cx="829" cy="374" r="86" /> 
    <circle cx="597" cy="259" r="30" /> 
    <circle cx="579" cy="379" r="13" /> 
    <circle cx="537" cy="379" r="68" /> 
    <rect x="0" y="296" rx="10" ry="10" width="280" height="32" /> 
    <rect x="0" y="345" rx="10" ry="10" width="280" height="88" /> 
    <rect x="-2" y="454" rx="10" ry="10" width="95" height="30" /> 
    <rect x="119" y="451" rx="25" ry="25" width="152" height="45" /> 
    <circle cx="574" cy="568" r="27" /> 
    <circle cx="574" cy="579" r="10" /> 
    <circle cx="568" cy="615" r="12" /> 
    <circle cx="137" cy="156" r="125" /> 
    <circle cx="586" cy="566" r="30" />
  </ContentLoader>
)

export default Skeleton