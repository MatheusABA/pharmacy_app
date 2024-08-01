import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import PharmacyCard from './PharmacyCard';

export interface FeaturedProps {
  title: string;
  description: string;
  pharmacys: any;
}

export default function Featured({title, description, pharmacys}: FeaturedProps) {
  return (
    <View>
      <View className='flex-row justify-between items-center px-4'>
        <View>
          <Text className='font-bold text-lg'>{title}</Text>
          <Text className='text-gray-300 text-xm'>
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text className='text-green-600 font-semibold'>Ver tudo...</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12
        }}
        className='overflow-visible py-5'
      >
        {
          pharmacys.map((pharmacy: any, index: any) => {
            return (
              <PharmacyCard
                item={pharmacy}
                key={index}
              />
            )
          })
        }

      </ScrollView>
    </View>
  )
}