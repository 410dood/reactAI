import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Clarifai from 'clarifai'

// import {NavigationActions} from 'react-navigation' import {CLARIFAY_KEY} from
// 'dotenv'
const CLARIFAY_KEY = 'bcdc87e24b314c9d9d4dae72d641b65b'

class PredictScreen extends Component {

    // constructor(props) {     super(props)     this.state = {         loading:
    // true,         result: ''     }     this._cancel = this         ._cancel
    // .bind(this) }

    componentDidMount() {
        const clarifai = new Clarifai.App({apiKey: CLARIFAY_KEY})

        process.nextTick = setImmediate // RN polyfill

        const {data} = this.props.navigation.state.params.image
        const file = {
            USER_INPUT
        }

        clarifai
            .models
            .predict(Clarifai.GENERAL_MODEL, file)
            .then(response => {
                const {concepts} = response.outputs[0].data

                if (concepts && concepts.length > 0) {
                    for (const prediction of concepts) {
                        if (prediction.name === 'pizza' && prediction.value >= 0.99) {
                            return this.setState({loading: false, result: 'Asian'})
                        }
                        this.setState({result: 'Not Asian'})
                    }
                }

                this.setState({loading: false})
            })
            .catch(e => {
                alert('Chill dude!, You probably exceeded the quota!', [
                    {
                        text: 'OK',
                        onPress: () => this._cancel()
                    }
                ], {cancelable: false})
            })
    }
}

export default PredictScreen

//     _cancel() {         const backAction = NavigationActions.back() this
// .props             .navigation .dispatch(backAction)     } render() {   const
// {type, data} = this.props.navigation.state.params.image         const
// sourceImage = `data:${type};base64,${data}`         return ( <BackgroundImage
//             source={{                 uri: sourceImage       }}
// resizeMode='cover'>                 <StatusBar hidden/> {this.state.loading ?
// <View style={styles.loader}> <ActivityIndicator size={75} color='#95a5a6'/>
//                 <Text style={styles.loaderText}>Analyse en cours...</Text>
// </View>    : <View style={styles.container}> <AnswerNotification
// answer={this.state.result}/>    <CaptureAndShare title='Partager'
// color='#3498db'                        image={sourceImage}
// onCancel={this._cancel}/>                         <button title='Non merci'
// color='black' textOnly onPress={this._cancel}/>         </View> }
// </BackgroundImage>         )     } } PredictScreen.propTypes = { navigation:
// PropTypes.object } export default PredictScreen