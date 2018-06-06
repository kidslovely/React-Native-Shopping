/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';


export default class Category extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  }

  componentWillMount() {
    var products = [
      {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product"},
      {id: 2, title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 10, title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 15, title: 'Long Sleeves T-Shirt', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 11, title: 'Pink Diamond Watch', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 22, title: 'Golden Tie', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 100, title: 'Black Pearl Earrings', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 215, title: 'Grey Blazer', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 12, title: 'Mirror Sunglasses', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 29, title: 'White Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 16, title: 'Tie', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'https://images.ikrix.com/product_images/original/gerard-darel-leather-jacket-cloud-leather-jacket-00000073981f00s001.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    this.setState({items: products});
  }

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
          <Container style={{backgroundColor: '#fdfdfd'}}>
            <Navbar left={left} right={right} title={this.props.title} />
            <Content padder>
              {this.renderProducts()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i+1} />
          </Grid>
        );
      }
    }
    return items;
  }
}
