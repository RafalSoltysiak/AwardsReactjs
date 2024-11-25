export interface ButtonProps {
  id?: string;
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass: string;
}

export interface AnimatedTitleProps {
  title: string;
  containerClass: string;
}

export interface BentoCardProps {
  src: string;
  title: ReactNode;
  description: string;
}

export interface BentoTiltProps {
  children: ReactChild;
  className: string;
}
