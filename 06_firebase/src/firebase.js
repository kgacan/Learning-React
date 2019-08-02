import * as firebase from 'firebase';



  // Your web app's Firebase configuration
  const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""

    //This should be populated with firebase database info
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const googleAuth = new firebase.auth.GoogleAuthProvider();


  export{
    firebase,
    firebaseDB,
    googleAuth
  }

//   firebaseDB.ref().set({
//       name:'Francis',
//       lastname:'Jones',
//       age:20,
//       car:{
//           brand:'Ford',
//           color:'black'
//       },
//       parents:['Mario', 'Martha']
//   });


// firebaseDB.ref('lastname').set('Richardson');

// firebaseDB.ref('car/brand').set('Chevy');

// firebaseDB.ref('skills').set(
//     ['Talking', 'Walking']
// );


// firebaseDB.ref('eyes').set('green')
// .then(()=>{
//     console.log('data saved')
// })
// .catch((e)=>{
//     console.log(e)
// });

//REMOVE
// firebaseDB.ref('eyes').remove()
// .then(()=>{
//     console.log('data removed')
// })
// .catch((e)=>{
//     console.log(e)
// });


// firebaseDB.ref('skills').set(null)
// .then(()=>{
//     console.log('data removed')
// })
// .catch((e)=>{
//     console.log(e)
// });

//UPDATE
// firebaseDB.ref('skills').set('green')
// .then(()=>{
//     console.log('data updated')
// })
// .catch((e)=>{
//     console.log(e)
// });

// firebaseDB.ref().update({
//     name:'Michael',
//     lastname:'Jackson'
// })
// .then(()=>{
//     console.log('data updated')
// })
// .catch((e)=>{
//     console.log(e)
// });

// firebaseDB.ref().update({
//    car:{
//        brand:'Nissan',
//        color:'green'
//    }
// })
// .then(()=>{
//     console.log('data updated')
// })
// .catch((e)=>{
//     console.log(e)
// });

// firebaseDB.ref().update({
//     name:'Steve',
//     'car/color':'Black' 
// })
//  .then(()=>{
//      console.log('data updated')
//  })
//  .catch((e)=>{
//      console.log(e)
//  });


//GETTING DATA
// firebaseDB.ref().once('value')
//  .then((snapshot)=>{
//      console.log(snapshot)
//  })
//  .catch((e)=>{
//      console.log(e)
//  });

// firebaseDB.ref().once('value')
//  .then((snapshot)=>{
//      console.log(snapshot.val())
//  })
//  .catch((e)=>{
//      console.log(e)
//  });

// firebaseDB.ref('car/brand').once('value')
//  .then((snapshot)=>{
//      console.log(snapshot.val())
//  })
//  .catch((e)=>{
//      console.log(e)
//  });

// firebaseDB.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// });

// //------------------------------------
// firebaseDB.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// });

// setTimeout(()=>{
//     firebaseDB.ref('name').set('Romeo')
// },5000)

//----------------------------------------
// firebaseDB.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// });

// setTimeout(()=>{
//     firebaseDB.ref('name').set('name1')
//  },3000)

//  setTimeout(()=>{
//     firebaseDB.ref().off()
//  },3000)

//  setTimeout(()=>{
//     firebaseDB.ref('name').set('name2')
//  },3000)

//------------------------------------------
// firebaseDB.ref().on('child_removed', (snapshot)=>{
//     console.log(snapshot.key ,snapshot.val())
// });

//-------------------------------------
// firebaseDB.ref().on('child_changed', (snapshot)=>{
//     console.log(snapshot.key ,snapshot.val())
// });

//-------------------------------------
// firebaseDB.ref().on('child_added', (snapshot)=>{
//     console.log(snapshot.key ,snapshot.val())
// });


//NEW VIDEO:::::____
// firebaseDB.ref().remove();



// firebaseDB.ref().set([
//   {
//     id:1,
//     name:'Francis',
//     lastname:'Jones'
//   },
//   {
//     id:2,
//     name:'Steve',
//     lastname:'Machintosh'
//   }
// ])

//------------------------------
// firebaseDB.ref('users').push({
//     name:'Lonzo',
//     lastname:'Ball'
// })

//-------------------------------
// firebaseDB.ref('users').push({
//   name:'Randy',
//   lastname:'Martial'
// })

//---------------------------------
// firebaseDB.ref('users/-LlDrW-2qNrjcevCpFvy').once('value')
// .then((snapshot)=>{
//   console.log(snapshot.val())
// })

//--------------
// firebaseDB.ref('users/-LlDrW-2qNrjcevCpFvy').update({
//   lastname:'Jay'
// })

//-----------------------
// firebaseDB.ref('users').once('value')
// .then((snapshot)=>{
//   const users=[];

//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(users);
// })

//-------------------
// firebaseDB.ref('users').once('value')
// .then((snapshot)=>{
//   const users=[];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id:childSnapshot.key,
//       name:childSnapshot.val().name
//     })
//   })
//   console.log(users);
// })

//QUERY-___----____----____---__--__--__--_-_-_-_
// firebaseDB.ref('users').push({
//   age:20,
//   lastname:'Ball',
//   name:'Jay'
// })

// firebaseDB.ref('users').push({
//   age:16,
//   lastname:'Martial',
//   name:'Randy'
// })

// firebaseDB.ref('users').once('value')
// .then((snapshot)=>{
//   const users=[];

//---------------------
// firebaseDB.ref('users').orderByChild('age').once('value')
// .then((snapshot)=>{
//   const users=[];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(users);
// })

//--------------
// firebaseDB.ref('users').limitToFirst(1).once('value')
// .then((snapshot)=>{
//   const users=[];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(users);
// })

//------------
// firebaseDB.ref('users').limitToLast(1).once('value')
// .then((snapshot)=>{
//   const users=[];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(users);
// })

//------------
// firebaseDB.ref('users').orderByChild('age').limitToFirst(1).once('value')
// .then((snapshot)=>{
//   const users=[];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(users);
// })

//-------------
// firebaseDB.ref('users').push({
//   name:'Steve',
//   lastname:'Ball'
// })

//--------------
// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
// .then((snapshot)=>{
//   console.log(snapshot.val())
// })