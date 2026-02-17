import { FC } from 'react';
import { Button } from '@imspdr/ui';
import { FaGithub } from 'react-icons/fa';
import { SiStorybook } from 'react-icons/si';
import { LinksContainer } from './styled';

const HeaderLinks: FC = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/imspdr', '_blank');
  };

  const handleStorybookClick = () => {
    window.open('https://imspdr.github.io/imspdr-common/', '_blank');
  };

  return (
    <LinksContainer>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleGithubClick}
        leftIcon={<FaGithub size={20} />}
        color="foreground.1"
      />
      <Button
        variant="ghost"
        size="sm"
        onClick={handleStorybookClick}
        leftIcon={<SiStorybook size={20} />}
        color="foreground.1"
      />
    </LinksContainer>
  );
};

export default HeaderLinks;
