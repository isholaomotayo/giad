import createCloudinary from '../lib/createCloudinary';
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFilePoster
);

export default class FIlepond extends React.PureComponent {
  state = {
    files: []
  };

  render() {
    return (
      <FilePond
        files={[
          {
            // set type to local to indicate an already uploaded file
            options: {
              type: 'local',

              // stub file information
              file: {
                name: 'user photograph',
                size: 32423,
                type: 'image/png'
              },

              // pass poster property
              metadata: {
                poster: this.state.userImage
              }
            }
          }
        ]}
        labelIdle="Drag & Drop your passport photo or Click here to browse"
        allowMultiple={false}
        maxFiles={1}
        server={createCloudinary(
          'omotayo',
          'pacmgiad',
          'userImage',
          ({ url }) => setState({ userImage: url })
        )}
      >
        {this.state.files.map(file => (
          <File key={file} source={file} />
        ))}
      </FilePond>
    );
  }
}
