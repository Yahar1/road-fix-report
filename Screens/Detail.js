import { View, Text, Image, Button, Linking, StyleSheet,Pressable, } from 'react-native';
import React, { useCallback,useState } from 'react';
import data from './Data.json'
import { Dropdown } from 'react-native-element-dropdown';

const data1 = [
  { label: 'ตำบล', value1: '1' },
  { label: 'ตำบลระแหง', value1: '1' },
  { label: 'ตำบลตลุกกลางทุ่ง', value1: '2' },
  { label: 'ตำบลหนองหลวง', value1: '3' },
  { label: 'ตำบลวังประจบ', value1: '4' },
  { label: 'ตำบลเชียงเงิน', value1: '5' },
  { label: 'ตำบลหนองบัวใต้', value1: '6' },
  { label: 'ตำบลหัวเดียด', value1: '7' },
  { label: 'ตำบลป่ามะม่วง', value1: '8' },
  { label: 'ตำบลหนองบัวเหนือ', value1: '9' },
  { label: 'ตำบลแม่ท้อ', value1: '10' },
  { label: 'ตำบลไม้งาม', value1: '11' },
  { label: 'ตำบลวังหิน', value1: '12' },
  { label: 'ตำบลโป่งแดง', value1: '13' },
  { label: 'ตำบลน้ำรึม', value1: '14' },
];

const data2= [
  { label: 'หมู่', value2: '15' },
  { label: 'หมู่ 1', value2: '15' },
  { label: 'หมู่ 2', value2: '16' },
  { label: 'หมู่ 3', value2: '17' },
  { label: 'หมู่ 4', value2: '18' },
];

const data3= [
  { label: '--ไม่ทราบหมายเลขถนน--', value3: '19' },
  { label: 'ทางหลวงแผ่นดินหมายเลข 12 อ.เมืองตาก', value3: '20' },
  { label: 'ทางหลวงแผ่นดินหมายเลข 104 อ.เมืองตาก', value3: '21' },
  { label: 'ทางหลวงแผ่นดินหมายเลข 105 อ.แม่สอด', value3: '22' },
  { label: 'ทางหลวงแผ่นดินหมายเลข 130 อ.แม่สอด', value3: '23' },
  { label: 'ทางหลวงแผ่นดินหมายเลข 1117 อ.อุ้มผาง', value3: '24' },
];

const data4= [
  { label: '--ไม่ทราบหมายเลขซอย--', value4: '1' },
  { label: 'ซอย 4', value4: '2' },
  { label: 'ซอย 7', value4: '3' },
  { label: '--', value4: '4' },
  { label: '--', value4: '5' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  /* const router = useRouter();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false); */
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}  
                />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data3}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data4}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Pressable
        onPress={() => {
                // Implement your navigation logic here
                navigation.navigate('General');
              }}
      >
        <View style={styles.viewMoreContainer}>
          <Text style={[styles.pressableBtn, styles.viewMoreBtn]}>Add More Report...</Text>
        </View>
        </Pressable>
    </View>
    
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
  },
  dropdown: {
    height: 50,
    borderColor: '#6666E0',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  viewMoreContainer: {
    marginTop: 40,
  },
  pressableBtn: {
    backgroundColor: '#BEBEBE',
    color: '#fff',
    padding: 20,
    margin: 10,
    fontSize: 24,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 4,
    borderRadius: 10,
  },
});
