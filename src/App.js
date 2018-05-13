import React, {Component} from 'react'
import Clarifai from 'clarifai' // AI

import {ViewStateMachine, ViewStateTemplate} from './ViewState.js'

import './App.css'

var clarifai = new Clarifai.App({ // init Clarifai
  apiKey: 'bcdc87e24b314c9d9d4dae72d641b65b'
  //apiKey: process.env.REACT_APP_LMS_CLARIFAI
})

// -- ERROR STATE -- //
class ViewStateError extends ViewStateTemplate {
  render() {
    return <div className='view view-error'>
      <h1>Error</h1>
      <p>{this
          .props
          .sm
          .store('error')}</p>
      <a
        className='btn btn-primary'
        onClick={function () {
        this
          .props
          .sm
          .state(0)
      }.bind(this)}>Retry</a>
    </div>
  }
}

// -- UPLOAD STATE -- //
class ViewStateUpload extends ViewStateTemplate {
  constructor(props) {
    super(props)

    this.error = this
      .error
      .bind(this)
    this.readFile = this
      .readFile
      .bind(this)
    this.predict = this
      .predict
      .bind(this)
  }

  render() {
    return <div className='view view-upload'>
      <h1>LetMeSee</h1>
      <input
        type='file'
        ref='file'
        accept='image/png, image/jpeg, image/bmp, image/tiff'/><br/><br/>
      <a
        className='btn btn-primary'
        style={{
        float: 'right',
        color: 'white'
      }}
        onClick={function () {
        this.readFile()
      }.bind(this)}>Scan</a>
      <div style={{
        clear: 'both'
      }}/>
    </div>
  }

  error(errorMessage) {
    this
      .props
      .sm
      .store('error', errorMessage, function () {
        this
          .props
          .sm
          .state(2) // 2 - ViewStateError
      }.bind(this))
  }

  predict(media) { // called by this.readFile, sets tags state
    console.log('Predicting image...')
    clarifai
      .models
      .predict(Clarifai.GENERAL_MODEL, {
        base64: /data:.*\/.*;base64,(.*)/.exec(media)[1] // data url base64 extraction
      })
      .then(function (response) {
        console.log(response)
        this
          .props
          .sm
          .store('tags', response.outputs[0].data.concepts, function () {
            this
              .props
              .sm
              .state(3) // 3 - ViewStatePreview
          }.bind(this))
      }.bind(this), function (err) {
        this.error('Failed to scan the file.')
        console.error(err)
      }.bind(this))
      .catch(function (err) {
        this.error('Failed to scan the file.')
        console.error(err)
      }.bind(this))
  }

  readFile() {
    // called by scan button, calls this.predict
    this
      .props
      .sm
      .state(1) // 1 - ViewStateLoading
    var files = this.refs.file.files // get files from our input
    if (files.length < 1) {
      this.error('Please select a file.')
      return
    } else if (files.length > 1) {
      this.error('Please only select a single file.')
      return
    }

    var file = files[0]
    var reader = new window.FileReader()

    reader.addEventListener('load', function () {
      this
        .props
        .sm
        .store('media', reader.result, function () {
          this.predict(this.props.sm.store('media'))
        }.bind(this))
    }.bind(this), false)

    reader.addEventListener('error', function (error) {
      this.error('Failed to read the file.')
      console.error(error)
    }.bind(this), false)

    reader.readAsDataURL(file)

    console.log('Reading file...')
  }
}

// -- LOADING STATE -- //
class ViewStateLoading extends ViewStateTemplate {
  render() {
    return <div className='loader'/> // basic loader, taken from https://www.w3schools.com/howto/howto_css_loader.asp
  }
}

// -- PREVIEW TAG LIST -- //
class PreviewTags extends Component {
  constructor(props) {
    super(props)

    if (!props.tags) {
      throw new Error('No tags provided.')
    }
  }

  render() {
    return this
      .props
      .tags
      .map(function (x) {
        return <li
          key={x.name}
          style={{
          opacity: x.value // fade based on confidence }}
          title={`Confidence: ${Math.round(x.value * 100)}%`}>{x.name}</li>
      })
  }
}

// -- PREVIEW STATE -- //
class ViewStatePreview extends ViewStateTemplate {
  render() {
    return <div className='view view-preview'>
      <img
        className='scannedImage'
        src={this
        .props
        .sm
        .store('media')}
        alt='Uploaded image'/>
      <ul className='scanTags'>
        <PreviewTags
          tags={this
          .props
          .sm
          .store('tags')}/>
      </ul>
      <button
        onClick={function () {
        this
          .props
          .sm
          .state(0)
      }.bind(this)}
        className='btn btn-outline-primary'>Again</button>
      <div style={{
        clear: 'both'
      }}/>
    </div>
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ViewStateMachine
          elements={[ < ViewStateUpload />, < ViewStateLoading />, < ViewStateError />, < ViewStatePreview />
        ]}/>

      </React.Fragment>
    )
  }
}

export default App
