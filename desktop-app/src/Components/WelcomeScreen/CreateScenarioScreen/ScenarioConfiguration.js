import { useEffect, useState } from "react";
import CustomInput from "../../../utils/components/CustomInput";
import { scenariooptions } from "./constants";

const ScenarioConfiguration = ({ onSet }) => {
  const [scenarioConfiguration, setConfiguration] = useState({
    scenarioname: "",
    duration: "", workers: "", requestperclient: "", throttling: "", delay: ""
  })

  const onChange = (name, value) => {
    setConfiguration({ ...scenarioConfiguration, [name]: value })
  }

  useEffect(() => {
    onSet("scenario", scenarioConfiguration)
  }, [scenarioConfiguration])

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap", height: "40%" }}>
      <p style={{ fontSize: "1.7vw", width: "100%", margin: "5px 5px 5px 30px" }}>Scenario configuration</p>
      {
        scenariooptions.map(option => <CustomInput key={option.name} required={true} inputname={option.name} label={option.label} onChange={onChange} placeholder={option.placeholder} value={scenarioConfiguration[option.name]} />)
      }
    </div>
  );
}
export default ScenarioConfiguration;