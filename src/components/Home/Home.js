import React, {Component} from 'react';
import {render} from 'react-dom';

class Home extends Component {

    uploadWidget() {
        window
            .cloudinary
            .openUploadWidget({
                cloud_name: 'CLOUD_NAME',
                upload_preset: 'PRESET',
                tags: ['xmas']
            }, function (error, result) {
                console.log(result);
            });
    }
    render() {
        return (
            <div className="home">
                <h1>Galleria</h1>
                <div className="upload">
                    <button
                        onClick={this
                        .uploadWidget
                        .bind(this)}
                        className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

render(
    <Home/>, document.getElementById('container'));

export default Home;