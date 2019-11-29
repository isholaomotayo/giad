import createCloudinary from '../lib/createCloudinary';
import { FilePond, File, registerPlugin } from 'react-filepond';
import User, { CURRENT_USER_QUERY } from '../components/User';
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

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const UPDATE_USER_IMAGE_MUTATION = gql`
  mutation UPDATE_USER_IMAGE_MUTATION($userImage: String!, $IDImage: String!) {
    createUserProfile(userImage: $userImage, IDImage: $IDImage) {
      firstname
      lastname
      IDImage
      userImage
    }
  }
`;

export default class FileUpload extends React.PureComponent {
  state = {
    imageUrl: this.props.imageUrl || '',
    files: [],
    userImage: this.props.me.profile.userImage || '',
    IDImage: this.props.me.profile.IDImage || ''
  };

  uploadCallback = async (url, updateUserImages) => {
    let updatedURL =
      this.props.imageUrl === this.state.userImage ? 'userImage' : 'IDImage';

    this.setState({ [updatedURL]: url.url, imageUrl: url.url });
  };

  render() {
    return (
      <Mutation
        mutation={UPDATE_USER_IMAGE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(updateUserImages, { error, loading, data }) => (
          <FilePond
            files={
              this.state.imageUrl !== ''
                ? [
                    {
                      // set type to local to indicate an already uploaded file
                      options: {
                        type: 'local',
                        // stub file information
                        file: {
                          name: this.props.imageName,
                          size: this.props.imageSize,
                          type: 'image/png'
                        },

                        // pass poster property
                        metadata: {
                          poster: this.state.imageUrl
                        }
                      }
                    }
                  ]
                : null
            }
            labelIdle={this.props.label}
            allowMultiple={false}
            maxFiles={1}
            server={createCloudinary(
              'omotayo',
              'pacmgiad',
              this.props.imageName,
              async url => {
                this.uploadCallback(url);
                await updateUserImages();
              }
            )}
          >
            {this.state.files.map(file => (
              <File key={file} source={file} />
            ))}
          </FilePond>
        )}
      </Mutation>
    );
  }
}
