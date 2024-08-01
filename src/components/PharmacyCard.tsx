import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function PharmacyCard({item}: any) {

    const navigation = useNavigation() as any;

    return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Pharmacy', {...item} as any)}
    >

        
        <View className='mr-6 bg-white rounded-2xl shadow-3xl mb-2'>
            <Image className="h-36 w-36 rounded-xl" source={item.image}/>
            <View className='px-0 pb-4 space-y-2'>
                <Text className='font-semibold pt-2 max-w-22 text-wrap'>{item.name}</Text>
                <View className='flex flex-row items-center space-x-1'>
                    <Ionicons name="star" color="gold" size={15} className='pt-2'/>
                    <Text className='text-xs pt-2 px-1'>
                        <Text className='text-green-600 font-thin mr-4'>{item.stars} </Text>
                        <Text className='text-gray-600'>
                            ({item.reviews} reviews)
                        </Text>
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1 pt-2 gap-1 max-w-20'>
                    <Ionicons name="location-sharp"/>
                    <Text className='text-xs text-gray-600'>{item.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}