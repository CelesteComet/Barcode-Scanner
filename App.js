import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  ToolbarAndroid
} from 'react-native';

import { RNCamera, FaceDetector } from 'react-native-camera';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}} >
        <ToolbarAndroid
          logo={require('./assets/img/omgLogo.png')}
          title="Barcode Scanner"
          style={styles.toolbar}
          actions={[{title: 'Settings', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}>
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>

            <Text style={{fontSize: 14}}> SNAP </Text>
        </View>
      </View>
          <View style={styles.pageStyle} key="2">
            <Text>Second page</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

var styles = {
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
