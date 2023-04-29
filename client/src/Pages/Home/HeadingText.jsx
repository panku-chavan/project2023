import React from 'react';
import Typewriter from 'typewriter-effect';

const HeadingText = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Happiness is an uphill battle. ",
                    "When things go wrong, don't go with them.",
                    "Happiness is a warm puppy.",
                    "Happiness never decreases by being shared.",
                    "Happiness is like jam."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 70,
            }}
        />
    )
}

export default HeadingText