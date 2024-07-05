interface UserTypes {
  name: string;
  email: string;
  password: string;
  id: string;
}

interface PostUserTypes {
  user:UserTypes;
  accessToken: string
}

interface PostUserAnswerTypes {
  name: string;
  email: string;
  passwordHash: string;
  id: string;
}

type PostUsersTypes = Array<PostUserTypes>;


