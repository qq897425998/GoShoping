/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,

} from 'react-native';
import Main from './Component/Main/main'

class GoShoping extends Component {
  render() {
    return (
        <Main/>
    );
  }
}

AppRegistry.registerComponent('GoShoping', () => GoShoping);
