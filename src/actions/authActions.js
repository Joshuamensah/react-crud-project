export const signUp = (user) => {
  console.log("signUp Action fired");
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((UserCreds) => { console.log("User created Successfully", UserCreds);})
      .catch((err) => console.log("Something went wrong", err));
  };
};

export const loginUser = (email, password) => {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((UserCreds) => {
        console.log("User logged in Successfully", UserCreds)
      })
      .catch((err) => console.log("Sorry ,something went wrong", err));
  };
};

export const logoutUser = () => {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .logout()
      .then(() => console.log("User logged out Successfully"))
      .catch((err) => console.log("Sorry, Something went wrong", err));
  };
};
