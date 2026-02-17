import { FC, ReactNode } from 'react';
import { MainCenterWrapper as StyledWrapper } from './styled';

interface MainCenterWrapperProps {
  children: ReactNode;
}

const MainCenterWrapper: FC<MainCenterWrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MainCenterWrapper;
