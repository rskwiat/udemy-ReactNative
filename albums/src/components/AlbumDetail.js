import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './buttons';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection style={styles.section}>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnail: {
    height: 50,
    width: 50
  },
  section: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 18
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    width: null,
    height: 300,
    flex: 1
  }
};

export default AlbumDetail;
