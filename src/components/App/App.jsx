import React from "react";
import Statistics from '../Statistics/Statistics'
import Notification from '../Notification/Notification';
import FeedbackOptions from '../Feedback/FeedbackOptions'
import Section from '../Section/Section';

class App extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
    }
  
       // constructor() {
    //     super(); // - обращается к React.Component, чтобы оттуда получить контекст this

    //     this.state = {
    //         good: 0,
    //         neutral: 0,
    //         bad: 0
    //     };
    // }

     state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad
    };

    onIncrGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }))
        
    }

    onIncrNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }))
    }

    onIncrBad = () => {
         this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }))
    }

    countTotalFeedback = () => {
        const totalGood= this.state.good
        const totalNeutral= this.state.neutral
        const totalBad = this.state.bad
        return totalGood + totalNeutral + totalBad
    }

    countPositiveFeedbackPercentage = () => {
        const countGood = this.state.good
        const totalCountFeeds = this.state.good + this.state.neutral + this.state.bad
        const percentageGoodFeeds =  Math.trunc(countGood / totalCountFeeds * 100)
        return percentageGoodFeeds
    }

    render() {
       return (
         <section>
            <Section title='Please leave feedback'/>
            <FeedbackOptions onIncrGood={this.onIncrGood} onIncrNeutral={this.onIncrNeutral} onIncrBad={this.onIncrBad} />
            <Section title='Statistics' />
            {this.countTotalFeedback() ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback" />}
        </section>
      );
    }
}

export default App;


