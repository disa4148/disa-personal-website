// types.d.ts или src/types.d.ts
declare type IntlMessages = {
  [key: string]: never | IntlMessages;
};
