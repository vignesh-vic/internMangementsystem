import React,{useState} from 'react'
import PassedOut from './PassedOut'
import Studying from './Studying'

export default function Index() {
    const [StudyingDetails, setStudyingDetails] = useState([]);
  const [passedOutDetails, setPassedOutDetails] = useState([]);

  return (
    <div>
      <PassedOut 
      StudyingDetails={StudyingDetails} setStudyingDetails={setStudyingDetails}
      passedOutDetails={passedOutDetails} setPassedOutDetails={setPassedOutDetails} />
      <Studying   StudyingDetails={StudyingDetails} setStudyingDetails={setStudyingDetails}
      passedOutDetails={passedOutDetails} setPassedOutDetails={setPassedOutDetails}/>   
    </div>
  )
}
