export type data = {
  _id: string;
  name: string;
  email: string;
  image: string;
  like: number;
  post: string;
  date: string;
};  

export type post = {
  data: [
    {
      _id: string;
      name: string;
      email: string;
      image: string;
      like: number;
      post:string
      date: string;
    }
  ];
};

export interface buttonType {
  text: string;
  function: string;
}
