import React from 'react';
import './Results.css';

const createOutput = (results) => {
    let age = "",
        gender = "",
        lis = "",
        appearance = "";
    if (results !== '') {
        age = results.age_appearance.concepts[0].name;

        gender = results.gender_appearance.concepts[0].name;
        if (gender === 'feminine') 
            gender = 'female';
        else if (gender === 'masculine') 
            gender = 'male';
        
        appearance = results.multicultural_appearance.concepts[0].name;
        if (appearance === 'asian') 
            appearance = 'asian';
        else if (appearance === 'white') 
            appearance = 'not asian';
        
        lis = results
            .multicultural_appearance
            .concepts
            .map(culture => {
                return (
                    <li key={culture.name}>
                        <span>{culture.name}</span>
                        <span>{(culture.value * 100).toFixed(2) + "%"}</span>
                    </li>
                );
            });
    };
    return {age, gender, lis, appearance};
}

const Results = ({results}) => {
    const {age, gender, lis, appearance} = createOutput(results);

    return (
        <div className="w-full dtc-ns ph">
            <ul className="list br3">
                <li>
                    Age
                    <span className="list-values">{age}</span>
                </li>
                <li>
                    Gender
                    <span className="list-values">{gender}</span>
                </li>
                <li>
                    Origin
                    <ul className="origin-list w-100">
                        {appearance}
                        {lis}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Results;