import React, { Component } from 'react'
import { connect } from 'react-redux'
import { predictImage } from '../actions'
import LinkWithTooltip from '../components/LinkWithTooltip';

class Predict extends Component {
  componentDidMount() {
    let url = this.props.params.url;
    const { dispatch } = this.props
    dispatch(predictImage(url));
  }


  render() {
    console.log(this.props);
    const { concepts } = this.props;
    let predictData = concepts.map((data) => {
      return (
        <tr key={data.id}><td>{data.name}</td><td>{data.value}</td></tr>
      );
    });

    return (
      <div className='container vertical-center'>
        <div className='row'>
          <div className="panel panel-primary">
            <div className="panel-heading clearfix">
              <h4 className="pull-left">Image Predictions</h4>
            </div>
            <div className="table-responsive">
              <table className='table table-striped'>
                <thead>
                <tr>
                  <th colSpan='1'>Classifcation</th>
                  <th colSpan='1'>Confidence</th>
                </tr>
                </thead>
                <tbody>
                  {predictData}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { concepts } = state.predictionReducer;
  return {
    concepts
  }
}

export default connect(mapStateToProps)(Predict)
