import React from "react";
import Statistics from '../Statistics/Statistics'


export default function App() {
  return (
    <section>
      <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0}/>
    </section>
  );
}
