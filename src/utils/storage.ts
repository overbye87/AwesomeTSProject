import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageItem<D> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  async get(): Promise<D | null> {
    const data = await AsyncStorage.getItem(this.name) as string;

    try {
      const parsedData = JSON.parse(data) as D;
      return parsedData;
    } catch (err) {
      return null;
    }
  }

  async set(data: D) {
    await AsyncStorage.setItem(this.name, JSON.stringify(data));
  }

  async remove() {
    await AsyncStorage.removeItem(this.name);
  }
}

export default {
  token: new StorageItem<string>('token'),
  ip: new StorageItem<string>('ip'),
};

