import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Image,
    TouchableOpacity 
  } from 'react-native';
  import React,{useEffect,useState} from 'react';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { router } from 'expo-router';
  
  
  const search = () => {
    const [search, setSearch] = useState("");

    const _categories = [
        {
            id: 1,
            title: "Plumbing",
            image: require('../../assets/images/3.png')
        },
        {
            id: 2,
            title: "Plumbing",
            image: require('../../assets/images/3.png')
        },
        {
            id: 3,
            title: "Plumbing",
            image: require('../../assets/images/3.png')
        }
    ]
    
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios'? 'padding' : 'height'}
          style={{flex: 1}}
        >
          <ScrollView
            style={styles.headerContainer}
            showsVerticalScrollIndicator={false}
          >
             <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                  <AntDesign name="left" size={24} color="black"  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.headerText}> All Categories </Text>
                </View>
              </View>
              <View>
                <View style={styles.searchContainer}>
                  <AntDesign name="search1" size={20} color={'black'} style={styles.icon}/>
                  <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={search}
                    onChangeText={setSearch}
                    placeholderTextColor="#888"
                  />
                </View>
              </View>
              <View
                style={{
                    marginTop: '10%'
                }}
              >
                {
                    _categories.map(item => (
                        <TouchableOpacity 
                            key={item.id}
                            onPress={() => {
                                router.push('/categories/[ItemId]')
                            }}
                        >
                            <View
                                 style={{
                                    display:'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginVertical: '7%',
                                }}
                            >
                                <Image 
                                    source={item.image}
                                    style={{
                                        width: '10%',
                                        height: '100%',
                                        borderRadius: 5,
                                        marginHorizontal: 10,
                                        marginBottom: 10,
                                        marginLeft: 10,
                                    }}
                                />

                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
              </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
  
  export default search
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    headerContainer: {
      width: '90%',
      marginHorizontal: 'auto',
      marginTop: '5%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      // paddingHorizontal: 16,
      width: '70%'
    },
    headerText: {
      fontSize: 24,
      fontWeight: '400',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "#333",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      paddingHorizontal: 10,
      height: 40,
      marginTop: '5%'
    },
    icon: {
      marginRight: 10,
    }, 
  })