/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="MY STORE" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'MEN',
    image: 'https://cdn.shopify.com/s/files/1/0501/5685/products/Black_Short_Sleeve.jpg?v=1508193420'
  },
  {
    id: 2,
    title: 'WOMEN',
    image: 'https://belk.scene7.com/is/image/Belk?layer=0&src=1802734_OB722446_A_650_T10L00&layer=comp&DWP_PRODUCT_ZOOM&hei=845'
  },
  {
    id: 3,
    title: 'KIDS',
    image: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/0/_11277380.jpg?crop=pad&pad_color=FFF&format=jpeg&w=587&h=900&quality=70'
  },
  {
    id: 4,
    title: 'Wedding',
    image: 'http://4.bp.blogspot.com/-fjiFIHjiddM/VbXkYWOVtKI/AAAAAAAAdtQ/rc8F1SuvvRA/s1600/Ed%2B%2526%2BAbby%2B21.jpg'
  }
];
