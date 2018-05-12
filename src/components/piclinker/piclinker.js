import React from 'react';
import {Clarifai} from "clarifai";
const CLARIFAI_API_KEY = 'bcdc87e24b314c9d9d4dae72d641b65b';

const PicLinker = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'enter image'}
            </p>
            <div className='center'>
                <div className="form center pa4 br3 shadow-5">
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-green'
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

// const Clarifai = process.env.TRAVIS   ? require('clarifai')   :
// require('../src'); const app = new Clarifai.App({apiKey:
// 'c4b8b617923e4e14b62e7a8a8ed7fc05'}); function log(d) {     try {
// console.log(JSON.stringify(d, null, 2));     } catch (e) { console.log(d);  }
// } class App extends Component {     constructor() {     super(); this.state
// = {             input: "", imageUrl: ""         }         const image =
// document.getElementById("inputImage");         // Prediction on general model
// using video API         clarifai             .models
// .predict(Clarifai.GENERAL_MODEL,
// 'https://samples.clarifai.com/3o6gb3kkXfLvdKEZs4.gif', {video: true})
// .then(log)             .catch(log);         // Provide feedback clarifai
// .models             .feedback(Clarifai.GENERAL_MODEL,
// 'https://s3.amazonaws.com/samples.clarifai.com/metro-north.jpg', {      id:
// 'ea68cac87c304b28a8046557062f34a0',                 data: { concepts: [
// { 'id': 'train',    'value': true    }, {           'id': 'car', 'value':
// false                         }       ]  }, info: {    'endUserId':
// '{end_user_id}', 'sessionId': '{{session_id}}', 'outputId': '{{output_id}}'
//             }           }) .then(log) .catch(log);     } }

export default PicLinker;