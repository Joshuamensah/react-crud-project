import { firestoreConnect } from "react-redux-firebase";

 //action creator for adding user
 export const addUser = (newUser) => {
   //  newUser.id = Math.random().toString();
   return (dispatch, getState, {getFirestore, getFirebase}) =>{ 
    const firestore = getFirestore();
    firestore.collection("users").add(newUser).then(res=> {
        console.log("user added");
        //dispatch ({
           // type: "ADD_USER",
           // payload: 'user added succesfully'
    })
    .catch(err =>{
        console.log("there was an error");
    })
   }
  //  return {
    //    type: 'ADD_USER',
  //      payload: newUser
//
//    }
}
//action creator for deleting User
 export const deleteUser = (userId) => {
     console.log("action-Fired",userId)
    return (dispatch , getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("users ").doc(userId).delete()
        .then(res => {
                console.log ("user deleted sucessfully")})
        .catch( err => {
            console.log ("user couldn't delete")
        })
   
   
   //return {
       // type: 'DELETE_USER',
       // payload: userId

    }
}

// action creator for edithing user
export const editUser = (updatedUser) => {
    return (dispatch , getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("users ").doc(updatedUser.id).set(updatedUser)
        .then(res => {
                console.log ("user Updated sucessfully")})
        .catch( err => {
            console.log ("user couldn't Update")
        })
    
}
        

};