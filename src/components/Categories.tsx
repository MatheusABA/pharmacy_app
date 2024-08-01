import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import categories from '../constants'
import { useState } from 'react'

export default function Categories() {

  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <View className=''>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {
          categories.map(( category, index ) => {
            let isActive = category.id == activeCategory;
            let buttonClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
            let textClass = isActive ? 'font-bold text-gray-800' : 'font-semibold text-gray-300'
            return (
              <View key={index} className='flex justify-center items-center mr-6 pt-4'>
                <TouchableOpacity
                  className={'p-1 rounded-full shadow bg-gray-200' + buttonClass}
                  onPress={() => setActiveCategory(category.id)}
                >
                  <Image source={ category.image } style={{ width: 45, height: 45}} className='items-center'/>
                </TouchableOpacity>
                <Text className={ 'font-semibold' + textClass }>{category.name}</Text>
              </View>
            )})
        }
      </ScrollView>
    </View>
  )
}