import * as React from 'react';
type User = {
  id: number;
  name: string,
  friends: Array<User['id']>
};
type CreatePayload = { name: User['name'], friends: User['friends']};
type EditPayload = User;
type Action = {type: 'createUser', payload: CreatePayload} | {type: 'editUser', payload: EditPayload};
type Dispatch = (action: Action) => void;
type State = {users: Array<User>};
type UsersProviderProps = {children: React.ReactNode};

const UsersStateContext = React.createContext<State | undefined>(undefined);

const UsersDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const usersReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'createUser': {
      return {
          users: [
            ...state.users,
            {
              //I would normally use a uuid, but considering you can't remove users or edit ids this is safe
              id: state.users.length,
              name: action.payload.name,
              friends: action.payload.friends,
            }
          ]
      };
    }
    case 'editUser': {
      const updatedUsers = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
      return {users: updatedUsers};
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

const UsersProvider = ({children}: UsersProviderProps) => {
  const [state, dispatch] = React.useReducer(usersReducer, { users: [] });
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

const useUsersState = () => {
  const context = React.useContext(UsersStateContext);
  if (context === undefined) {
    throw new Error('useUsersState must be used within a UsersProvider');
  }
  return context;
}

const useUsersDispatch = () => {
  const context = React.useContext(UsersDispatchContext);
  if (context === undefined) {
    throw new Error('useUsersDispatch must be used within a UsersProvider');
  }
  return context;
}

const useUsers = () => {
  return [useUsersState(), useUsersDispatch()];
}

export {UsersProvider, useUsers};
