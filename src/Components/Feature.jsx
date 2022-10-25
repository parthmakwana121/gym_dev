import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from "../images/1.svg"
import fimage2 from "../images/2.svg"
import fimage3 from "../images/3.svg"
import fimage4 from "../images/4.svg"

const Feature = () => {
    return (
        <>
            <div id="features">
                <h1>Features</h1>
                <div className="a-container">
                    <Featurebox image={fimage1} title="WeightUp" text="Here are some energy-dense foods that may help you gain weight: " />
                    <Featurebox image={fimage2} title="Muscle Build" text="Most beginners will see noticeable muscle growth within eight weeks" />
                    <Featurebox image={fimage3} title="Protein " text="It is safe to drink protein shakes every day " />
                    <Featurebox image={fimage4} title="Cardio" text="Cardio is defined as any type of exercise that gets your heart rate up " />
                </div>
            </div>
        </>
    )
}

export default Feature