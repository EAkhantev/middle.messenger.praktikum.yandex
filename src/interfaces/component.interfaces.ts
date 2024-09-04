import ErrorLine from '../components/UI/ErrorLine/errorLine';

export interface TitleProps {
  titleContent: string;
}

export interface ErrorLineProps {
  errorMessage?: string;
}

export interface InputProps {
  name: string;
  type: string;
  labelValue: string;
  errorLine?: ErrorLine;
  autocomplete?: string;
  isDisable?: boolean;
  validationRules?: {
    type?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
  };
}

export interface ButtonProps {
  buttonContent: string;
  disabled?: boolean;
}

export interface LinkProps {
  linkContent: string;
  events?: object;
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
  events?: object;
}

export interface ChatItemProps {
  contactName: string;
  msgDateTime: string;
  youSelf: boolean;
  msgContent: string;
  msgCount: string;
}

export interface ProfileAvatarProps {
  firstName: string;
  secondName: string;
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
