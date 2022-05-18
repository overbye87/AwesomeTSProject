import React from 'react';
import {
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { PhotoFile } from 'react-native-vision-camera';
import PhotoItem from '../components/PhotoItem';
import { useTypedSelector } from '../store/store';

const keyExtractor = (item: PhotoFile) => item.path;

const renderItem: ListRenderItem<PhotoFile> = ({ item }) => (
  <PhotoItem result={item} />
);

const MediaFiles = () => {
  const results = useTypedSelector(({ camera }) => camera.results);
  return (
    <View>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default MediaFiles;
