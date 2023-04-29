import React from 'react';
import Typewriter from 'typewriter-effect';

const HeadingText = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Web Developer",
                    "Javascript Developer",
                    "MERN Stack Developer",

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default HeadingText