import React, { useState, Dispatch, SetStateAction } from 'react';
import Logo from '../Logo';
import { Section, Content, SearchContent, Input } from './styled';
import { fadeInUp } from '../../utils';

type IProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<IProps> = ({ setSearch }) => {
  const [text, setText] = useState('');

  const handleChange = (t: string) => {
    setSearch(t);
  };

  return (
    <Section>
      <Content initial={fadeInUp.initial} animate={fadeInUp.animate}>
        <Logo size="normal" name="chopper" />
      </Content>
      <SearchContent>
        <Input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />

        <button
          style={{
            marginLeft: '20px',
            background: 'transparent',
            border: 'none',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleChange(text)}
        >
          <img
            src={`/img/search.png`}
            style={{ width: '35px', height: '35px' }}
          />
        </button>
      </SearchContent>
    </Section>
  );
};

export default Search;
