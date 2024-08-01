import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MedicineRow from '../components/MedicineRow';


export function PharmacyScreen() {
  const {params} = useRoute();
  let item = params as any;

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={item.image}/>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
          >
            <Ionicons name='arrow-back' size={20} color='green'/>

          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className='bg-white -mt-12 pt-6'
        >
          <View className='px-5'>
            <Text className='text-2xl font-bold'>{item.name}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <Ionicons name="star" color="gold" size={15} className='pt-2'/>
                <Text className='text-xs pt-2 px-1'>
                    <Text className='text-green-600 font-thin mr-4'>{item.stars} </Text>
                    <Text className='text-gray-600'>
                        ({item.reviews} reviews)
                    </Text>
                </Text>
              </View>
              <View className='flex-row items-center space-x-1 pt-2 gap-1 px-2'>
                <Ionicons name="location-sharp"/>
                <Text className='text-xs text-gray-600'>{item.address}</Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2'>
              {item.description}
            </Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>
            Medicamentos
          </Text>
          {
            item.medicines.map((medicine:any, index:any) => <MedicineRow item={{...medicine}} key={index}/>)
          }
        </View>
      </ScrollView>
    </View>
  )
}