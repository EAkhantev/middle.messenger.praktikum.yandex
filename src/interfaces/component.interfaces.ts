export interface TitleProps {
  titleContent: string;
}

export interface InputProps {
  name: string;
  type: string;
  labelValue: string;
  autocomplete?: string;
  isDisable?: boolean;
}

export interface ButtonProps {
  buttonContent: string;
}

export interface LinkProps {
  linkContent: string;
  href?: string;
}

export interface FormProps {
  className: string;
  title: TitleProps;
  fields: InputProps[];
  button: ButtonProps;
  link: LinkProps;
}

export interface ErrorProps {
  errorTitle: string;
  errorDescription: string;
  link: LinkProps;
}

export interface ChatItemProps {
  contactName: string;
  msgDateTime: string;
  youSelf: boolean;
  msgContent: string;
  msgCount: string;
}

export interface ProfileAvatarProps {
  avatarTitle: string;
}

export interface ProfileInputProps extends InputProps {
  defaultValue: string;
}

export type ProfileActionProps = LinkProps;

export interface ProfileFormProps {
  avatar: ProfileAvatarProps;
  fields: ProfileInputProps[];
  actions: ProfileActionProps[];
}
