import React from 'react';
import Box from '../../component-library/Box/Box';
import Button from '../../component-library/Button/Button';
import Image from '../../component-library/Image/Image';
import PageLayout from '../../component-library/Layout/PageLayout';
import TextTitle from '../../component-library/Text/TextTitle';
import Logo from '../../images/logo.png';
import {useNavigation} from '../../routes/hooks';

const SelectOptions = () => {
  const navigate = useNavigation();
  return (
    <PageLayout>
      <Box px={10} py={10}>
        <Image src={Logo} alt="logo" />
      </Box>
      <Box px={10} py={10}>
        <TextTitle>Welcome</TextTitle>
      </Box>
      <Box px={10} py={10}>
        <TextTitle>SOLANA</TextTitle>
      </Box>
      <Box px={10} py={10}>
        <Button onClick={() => navigate('create')}>Crear wallet</Button>
      </Box>
      <Box px={10} py={10}>
        <Button onClick={() => navigate('recover')}>Recuperar wallet</Button>
      </Box>
    </PageLayout>
  );
};

export default SelectOptions;