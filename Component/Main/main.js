/**
 * Created by tangxin on 16/9/9.
 */
/**
 * Created by tangxin on 16/9/9.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Platform,
    Text,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/home';
import Mine from '../Mine/mine';
import Shop from '../Shop/shop';
import More from '../More/more';

export default class Main extends Component {

      constructor(props) {
        super(props);
        this.state = {
            selectedTab : 'home'

        };
      }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}}  style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}}  style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    >
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}}  style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}}  style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'shop' })}
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                 >
                    <Shop/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}}  style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}}  style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                >
                    <Mine/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}}  style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}}  style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'more' })}
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                >
                    <More/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconStyle: {
        width: Platform.OS ==='ios'? 30:25,
        height: Platform.OS ==='ios'? 30:25,
    }
});
