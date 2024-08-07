import React from "react";
import SleepAnalysis from "./AnalysisComponents/SleepAnalysis";
import MoodAnalysis from "./AnalysisComponents/MoodAnalysis";
import { ScrollView, Text } from "react-native";
import Bottom from "../Bottom";
import BecksTestResult from "./AnalysisComponents/BecksTestResult";
import FinalResult from "./AnalysisComponents/FinalResult";
import FaceDetectResult from "./AnalysisComponents/FaceDetectResult";

const Analysis = () => {

  const date = new Date();
  const thresholdDate = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  return (
    <ScrollView>
      <Text style={{color: 'black', fontWeight:'600', textAlign:'center', margin: 5}}>{thresholdDate.getDate()}/{thresholdDate.getMonth() + 1}/{thresholdDate.getFullYear()} to {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text>
      <BecksTestResult/>
      <SleepAnalysis/>
      <FaceDetectResult/>
      <MoodAnalysis/>
      <FinalResult/>
      <Bottom />
    </ScrollView>
  );
};

export default Analysis;
