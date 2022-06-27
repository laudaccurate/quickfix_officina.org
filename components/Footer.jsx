import { Footer, Text } from '@mantine/core';
import React from 'react';

export default function AppFooter() {
  return (
    <Footer height={60} style={{ textAlign: 'center' }} p="md">
      <Text size="xs">
        Copyright © 2022{' '}
        <Text
          variant="link"
          size="xs"
          component="a"
          href="https://www.nca.org.gh/"
        >
          National Communications Authority.
        </Text>
        | All Rights Reserved
      </Text>
    </Footer>
  );
}
