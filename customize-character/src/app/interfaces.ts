export interface IAppearance {
  hairColor: string,
  skinColor: string,
  gender: string
}

export interface IFriends {
  firstName: string,
  lastName: string,
}
export interface IAddress {
  street: string,
  number: string
}
export interface IBio {
  firstName: string,
  lastName: string,
  city: string,
  address: IAddress,
  friends: IFriends[]
}
