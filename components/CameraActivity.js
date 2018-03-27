import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeScanner from 'react-native-barcode-scanner-google';

// Actions
import { fetchUpc, receiveUpc, receiveUpcError } from '../actions/upcActions';
import { ToastActionsCreators } from 'react-native-redux-toast';


class CameraActivity extends Component<Props> {

  constructor(props) {
    super(props);
    this.barcodeRead = this.barcodeRead.bind(this);
  }

  barcodeRead(e) {
    const { dispatch, fetching } = this.props;
    if (!fetching) {
      dispatch(fetchUpc(e.data))
        .then(res => {
          dispatch(ToastActionsCreators.displayError('Found Item!'));
          dispatch(receiveUpc('found item'));
        })
        .catch(err => {
          dispatch(ToastActionsCreators.displayError('Item not found!'));
          dispatch(receiveUpcError(err));
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <BarcodeScanner
              style={{flex: 1}}
              onBarcodeRead={({data, type}) => {
                  // handle your scanned barcodes here!
                  // as an example, we show an alert:
                  Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`);
              }}
          />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const mapStateToProps = state => {
  return {
    fetchingUpc: state.upc.fetching
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraActivity);




