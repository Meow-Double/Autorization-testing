interface PostUserTypes {
  name: string;
  email: string;
  password: string;
}

interface PostUserAnswerTypes {
  name: string;
  email: string;
  passwordHash: string;
  id: string;
}

type PostUsersTypes = Array<PostUserTypes>;
