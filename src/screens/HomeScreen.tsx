import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from '../components/Categories';

import { featured } from '../constants';
import Featured from '../components/Featured';

export function HomeScreen() {
  return (
    <SafeAreaView className='mt-10 bg-white'>

      {/* cellphone status bar */}
      <StatusBar barStyle={'dark-content'} className=''/> 

      {/* Search bar */}
      <View className='flex-row items-center space-x-2 px-4 pb-2 pt-2 border border-slate-100'>
        <View className='flex-row flex-1 items-center p-3 mr-5 rounded-full'>
          <Ionicons name="search" size={20}/>
          <TextInput placeholder='Buscar...' className='ml-2 flex-1'/>
          <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-200'>
            <Ionicons name='location-sharp' size={20}/>
            <TextInput placeholder='Chicago' className='font-semibold '/>
          </View>
        </View>
        <View className='p-3 bg-green-600/80 rounded-full'>
          <Ionicons name='apps' size={20} color="white"/>
        </View>
      </View>


      {/* Main Content */}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 30
      }}
      >
        {/* Categories section */}
        <Categories/>

        {/* Feature section */}
        <View className='mt-5'>
          {
            [featured].map((item, index) => {
              return (
                <Featured
                  key={index}
                  title={item.title}
                  pharmacys={item.pharmacys}
                  description={item.description}
                />
              )
            })
          }

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}