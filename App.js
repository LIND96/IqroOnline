/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  useWindowDimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };

  const { width, height } = useWindowDimensions();
  const heightImage = height - (330 / height * 852);
  const widthImage = width - (10 / width * 393);
  // <Image source={{ uri: 'https://raw.githubusercontent.com/LIND96/assetIqroApps/refs/heads/main/IQRO5/IQRO5-20.png' }} style={{ height: heightImage, width: widthImage, resizeMode: 'contain' }} />

  const imageHeight = (((width - 30) / 332) * 165);
  const CardIqroItem = ({ title, valueTitle, imageType, iconType }) => {
    return (
      <View style={{
        width: '100%',
        minHeight: 60,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
        marginBottom: 7
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%'
        }}>
          <FastImage style={{ height: 40, width: 40 }} source={{ uri: `https://raw.githubusercontent.com/LIND96/assetIqroApps/refs/heads/main/Assets/${imageType}.png` }} />
          <View style={{ marginHorizontal: 15 }}>
            <Text allowFontScaling={false} style={{ fontSize: 14, fontFamily: 'Inter-Medium' }}>
              {title}
            </Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontFamily: 'Inter-Light', flexWrap: 'wrap' }}>
              {valueTitle}
            </Text>
          </View>
        </View>
        <FastImage style={{ height: 24, width: 24, }} source={{ uri: `https://raw.githubusercontent.com/LIND96/assetIqroApps/refs/heads/main/Assets/${iconType}.png` }} />
      </View>
    );
  };

  return (
    <SafeAreaView style={[{ backgroundColor: 'white', flex: 1 }]}>
      <View style={{ flexDirection: 'row', width, justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <FastImage
            source={{ uri: 'https://raw.githubusercontent.com/LIND96/assetIqroApps/refs/heads/main/Assets/iconapps.png' }}
            style={{ height: 50, width: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text allowFontScaling={false} style={{ fontSize: 20, fontFamily: 'Inter-SemiBold' }}>
              Aplikasi Iqro Online
            </Text>
            <Text allowFontScaling={false} style={{ fontSize: 12, fontFamily: 'Inter-Regular' }}>
              Belajar mengaji mandiri dimana saja
            </Text>
          </View>
        </View>
        <FastImage
          source={{ uri: 'https://raw.githubusercontent.com/LIND96/assetIqroApps/refs/heads/main/Assets/iqro.png' }}
          style={{ height: 50, width: 50 }}
          resizeMode="contain"
        />
      </View>
      <ScrollView style={{ padding: 15 }}>
        <FastImage
          source={{ uri: 'https://raw.githubusercontent.com/LIND96/assetIqroApps/refs/heads/main/Assets/vectorDisplay.png' }}
          style={{ height: imageHeight, width: '100%', marginTop: 10 }}
          resizeMode="contain"
        />

        <View style={{ marginTop: 20, maxWidth: width - 30 }}>
          <Text allowFontScaling={false} style={{ fontSize: 16, fontFamily: 'Inter-Bold', marginBottom: 10 }}>Tentang Aplikasi</Text>
          <Text allowFontScaling={false} style={{ fontSize: 13, fontFamily: 'Inter-Light' }}>
            Belajar mengaji secara mandiri dengan kumpulan huruf arab dan video yang dapat memudahkan kaum muslimin untuk mahir membaca Al-quran.
          </Text>
        </View>
        <View style={{ marginTop: 20, maxWidth: width - 30 }}>
          <Text allowFontScaling={false} style={{ fontSize: 16, fontFamily: 'Inter-Bold', marginBottom: 10 }}>Terakhir Dibaca</Text>
          <CardIqroItem title={'JILID 1 Halaman 5'} valueTitle={'5 Oktober 2024'} iconType={'playCircle'} imageType={'iqro1'} />
        </View>
        <View style={{ marginTop: 20, maxWidth: width - 30 }}>
          <Text allowFontScaling={false} style={{ fontSize: 16, fontFamily: 'Inter-Bold', marginBottom: 10 }}>Kumpulan IQRA</Text>
          <CardIqroItem title={'IQRO 1'} valueTitle={'Pengenalan bunyi huruf tunggal hijaiyah berharakat fathah'} iconType={'playCircle'} imageType={'iqro1'} />
          <CardIqroItem title={'IQRO 2'} valueTitle={'Pengenalan huruf-huruf bersambung tetapi masih menggunakan harakat fathah'} iconType={'playCircle'} imageType={'iqro2'} />
          <CardIqroItem title={'IQRO 3'} valueTitle={'Pengenalan harakat kasrah atau mad dan  dhammah.'} iconType={'playCircle'} imageType={'iqro3'} />
          <CardIqroItem title={'IQRO 4'} valueTitle={'Pengenalan huruf sambung yang berisi huruf berharakat dan tanwin'} iconType={'playCircle'} imageType={'iqro4'} />
          <CardIqroItem title={'IQRO 5'} valueTitle={'Pengenalan bacaan alif, tanda waqof, mad far’I, lam jalalah dan idghom'} iconType={'playCircle'} imageType={'iqro5'} />
          <CardIqroItem title={'IQRO 6'} valueTitle={'Cara membaca dengan lebih baik dan lebih banyak bacaan yang berkaitan dengan tajwid'} iconType={'playCircle'} imageType={'iqro6'} />
        </View>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 100 }}>
          <Text allowFontScaling={false} style={{ fontSize: 10, fontFamily: 'Inter-Light' }}>versi 1.0.0</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
