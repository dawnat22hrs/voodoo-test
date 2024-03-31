export interface IPost {
  userId: number
  id: number
  title: string
  body: string
  user?: IUser
}

export interface IGeo {
  lat: string
  lng: string
}

export interface IAddres {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IAddres
}
