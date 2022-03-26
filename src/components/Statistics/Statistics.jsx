import React from 'react'
import FeedbackOptions from '../Feedback/FeedbackOptions'
import Section from '../Section/Section'

class Statistics extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
    }

     state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad
    };

    onIncrGood = (evt) => {
        console.log('Good')
        const target = evt.target
        console.log(target)

        this.setState((prevState) => ({
            good: prevState.good + 1,
        }))
        
    }

    onIncrNeutral = evt => {
        console.log('Neutral')
        const target = evt.target
        console.log(target)

        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }))
    }

    onIncrBad = evt => {
        console.log('Bad')
        const target = evt.target
        console.log(target)
       
         this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }))
    }

   render() {
        return (
            <Section title="Statistics">
                <FeedbackOptions onIncrGood={this.handleIncrGood} onIncrNeutral={this.handleIncrNeutral} onIncrBad={ this.handleIncrBad} />
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: </li>
                        <li>Positive feedback:</li>    
                    </ul>
            </Section>
            
        );
    }
}

export default Statistics;


   // constructor() {
    //     super(); // - обращается к React.Component, чтобы оттуда получить контекст this

    //     this.state = {
    //         good: 0,
    //         neutral: 0,
    //         bad: 0
    //     };
    // }