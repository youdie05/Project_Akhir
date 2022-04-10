import React, {useEffect, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function PickerSelect() {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState(null);
  const [kecamatan, setKecamatan] = useState(null);
  const [idProvinsi, setIdProvinsi] = useState(null);
  const [idKabupaten, setIdKabupaten] = useState(null);
  const [idKecamatan, setIdKecamatan] = useState(null);
  const [idDesa, setIdDesa] = useState(null);
  const [desa, setDesa] = useState(null);

  const getProv = async () => {
    try {
      const response = await fetch(
        `http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`,
      );
      const prov = await response.json();
      console.log(prov);
      setProvinsi((label: prov.name));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getProv();
    console.log(provinsi);
  }, []);

  const data = [{}];
  return (
    <View style={styles.container}>
      {/* {provinsi.map((prov, index) => {
        return (
          <View key={index}>
            <Text>{prov.id}</Text>
            <Text>{prov.name}</Text>
          </View>
        );
      })} */}
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          height: 50,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 20,
        }}>
        <RNPickerSelect
          onValueChange={value => setProvinsi(value)}
          items={[{label: provinsi.name, value: provinsi.id}]}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          height: 50,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 20,
        }}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
