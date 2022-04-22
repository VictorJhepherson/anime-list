import React, { useState } from 'react';
import Logo from '../Logo';
import { Section, Content, Input } from './styled';
import { fadeInUp } from '../../utils';

export default function Search() {
  const [text, setText] = useState('');

  return (
    <Section>
      <Content initial={fadeInUp.initial} animate={fadeInUp.animate}>
        <Logo size="normal" name="chopper" />
      </Content>
      <Input type="text" placeholder="Search" autoFocus />
    </Section>
  );
}
