const { default: Switch } = require("react-bootstrap/esm/Switch")

const initialState = {
    users: [
        {
          name: "Joshua Mensah",
          email: "Joewy4me@yahoo.com",
          gen: 15,
          id: "094484fdfkjskks",
        },

        {
          name: "Susana Mensah",
          email: "Siawsusan84@gmail.com",
          gen: 10,
          id: "hfhfdkfd98833",
        },
        {
          name: "Agnes Siaw",
          email: "Siawagnes89@gmail.com",
          gen: 4,
          id: "nhff877370",
        },
      ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
            };
            return {...state,users:[...state.users, newUser ]};
        
        
    
        default:
            return state
    }
};


export default usersReducer;