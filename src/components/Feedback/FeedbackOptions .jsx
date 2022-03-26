import React from 'react'
import Section from '../Section/Section'

const FeedbackOptions = ({onIncrGood, onIncrNeutral, onIncrBad}) => {
    return (
        
        <Section title="Please leave feedback">
            <ul>
                <li><button type='button' onClick={onIncrGood}>Good</button></li>
                <li><button type='button' onClick={onIncrBad}>Bad</button></li>
                <li><button type='button' onClick={onIncrNeutral}>Neutral</button></li>
            </ul>
        </Section>
    );
};

export default FeedbackOptions 