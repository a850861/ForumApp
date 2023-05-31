import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { icons1, row } from '../CommonCss/pagecss'
import Icon from 'react-native-vector-icons/FontAwesome';
const Post_Big_Card = (
    
        {
                username,
                post_image,
                likes,
                comments,
            }
) => {
  // console.log(comments)
  const[isliked,setIsLiked]=useState(false)
  const[showcomments,setshowcomments]=useState(false)
  return (
    <View style={styles.conatiner}>
      <View style={styles.c1}>
        <Image source={{uri:post_image}} style={styles.profilepic}/>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.s2}>
        {
          isliked ?
          <View style={styles.s21}> 
          <Icon name="heart" size={24} color="gray" style={styles.iconliked} onPress={()=>{
            setIsLiked(false)
          }}/>
          <Text style={styles.liked}>{likes.length+1}</Text>
          </View> 
          :
          <View style={styles.s21}> 
          <Icon name="heart-o" size={24} color="gray" style={icons1} onPress={()=>{
            setIsLiked(true)
          }}/>
          <Text style={styles.notliked}>{likes.length}</Text>
          </View>
        }
        <View style={styles.s22}>
        <Icon name="comment" size={24} color="gray" style={icons1} onPress={
          ()=>{
            setshowcomments(!showcomments)
          }
        }/>
        </View>
      </View>
      {
        showcomments==true &&
        <View style={styles.s3}>
          {
            comments.map((item,index)=>{
              return(
                <View style={styles.s31} key={item.id}>
                  <Text style={styles.commentext
                  }>{item.username}</Text>
                  <Text style={styles.comment}>{item.comment}</Text>
                </View>
              )
            })
          }
        </View>
      }
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    conatiner:{
        width:'100%',
        // height:300,
        backgroundColor:'white',
        marginVertical:10,
        borderRadius:10,
       overflow:'hidden',
       borderColor:'white',
       borderWidth:1,


    },
    c1:{
      width:'100%',
      alignItems:'center',
      flexDirection:'row',
      padding:10,
      backgroundColor:'black',

    },
    profilepic:{
      width:30,
      height:30,
      borderRadius:10,
      borderColor:'white',
      borderWidth:1,
    },
    username:{
      color:'white',
      marginLeft:10,
      fontSize:17,
      fontWeight:'bold',

    },
    s2:{
      width:'100%',
      flexDirection:'row',
      backgroundColor:'black',
      padding:10,
      alignItems:'center',
    },
    s21:{
        // width:'100%',
        flexDirection:'row',
        alignItems:'center',

    },
    notliked:{
      color:'grey',
      marginLeft:5,
      fontSize:25,
    },
    liked:{
      color:'pink',
      marginLeft:5,
      fontSize:25,
    },
    iconliked:{
      color:'pink',
      fontSize:30,
    },
    s22:{
      marginLeft:20,
    },
    s3:{
      width:'100%',
      backgroundColor:'#111111',
      padding:10,
    },
    commentext:{
      color:'white',
      fontWeight:'bold',
      fontSize:17,
    },
    comment:{
      color:'grey',
      marginLeft:5,
      fontSize:17,

    },
    s31:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:3,
    }
})