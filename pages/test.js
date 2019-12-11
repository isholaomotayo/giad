// import React from 'react';
// import fileSize from '../lib/fileSize';
// import FileUpload from '../components/FileUpload';

// class Test extends React.Component {
//   componentDidMount() {
//     fileSize(this.state.url).then(s => this.setState({ size: parseInt(s) }));
//   }
//   state = {
//     size: 0,
//     url:
//       'https://res.cloudinary.com/omotayo/image/upload/v1574684299/giad/sbku20f1d41nv8tsbibh.jpg'
//   };

//   render() {
//     return (
//       <div>
//         <FileUpload />
//         {this.props.stars}
//         Test Data
//         {JSON.stringify(this.state.size)}
//       </div>
//     );
//   }
// }
// export default Test;

// import React, { Component } from 'react';
// import { withToastManager } from 'react-toast-notifications';

// class ConnectivityListener extends Component {
//   state = {
//     isOnline: process.browser && window ? window.navigator.onLine : false
//   };

//   // NOTE: add/remove event listeners omitted for brevity

//   onlineCallback = () => {
//     this.props.toastManager.remove(this.offlineToastId);
//     this.offlineToastId = null;
//   };
//   offlineCallback = id => {
//     this.offlineToastId = id;
//   };

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     const { isOnline } = this.state;

//     if (prevState.isOnline !== isOnline) {
//       return { isOnline };
//     }

//     return null;
//   }
//   componentDidUpdate(props, state, snapshot) {
//     if (!snapshot) return;

//     const { toastManager } = props;
//     const { isOnline } = snapshot;

//     const content = (
//       <div>
//         <strong>{isOnline ? 'Online' : 'Offline'}</strong>
//         <div>
//           {isOnline
//             ? 'Editing is available again'
//             : 'Changes you make may not be saved'}
//         </div>
//       </div>
//     );

//     const callback = isOnline ? this.onlineCallback : this.offlineCallback;

//     toastManager.add(
//       content,
//       {
//         appearance: 'info',
//         autoDismiss: isOnline
//       },
//       callback
//     );
//   }
//   render() {
//     return null;
//   }
// }

// export default withToastManager(ConnectivityListener);

import { useToasts, ToastProvider } from 'react-toast-notifications';

class Comp extends React.PureComponent {
  state = {
    new: true
  };

  render() {
    return (
      <div>
        <span>Child to use the stuff</span>

        <button
          onClick={() =>
            this.props.addToast('content', {
              appearance: 'info',
              autoDismiss: true
            })
          }
        >
          {' '}
          Add Toast
        </button>
      </div>
    );
  }
}
const App = ({ content }) => {
  const { addToast } = useToasts();
  return (
    <div>
      Parent of the stuff
      <Comp addToast={addToast} />
    </div>
  );
};

const Parent = () => {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
};
export default Parent;
