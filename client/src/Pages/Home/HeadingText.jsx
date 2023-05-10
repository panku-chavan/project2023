import React from 'react';
import Typewriter from 'typewriter-effect';

const HeadingText = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Hello Pankaj....",
                    "Hello Krishna....."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 70,
            }}
        />
    )
}

export default HeadingText