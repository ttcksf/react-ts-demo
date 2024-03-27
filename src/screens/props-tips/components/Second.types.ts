export type SecondProps = {
  firstName: string;
  lastName: string;
};

// タイプ同士で拡張し合うことも可能
export type ThirdProps = {
  fullName: SecondProps;
};
