import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';

const propTypes = {
  value: string,
};

const defaultProps = {
  value: '',
};

const BreakWord = styled(Text)`
  word-break: break-word;
  line-height: 1.5;
`;

function NoResults({ value }) {
  return (
    <Flex direction="column" align="center" bg="gray0" px={6} py={7}>
      <BreakWord f={3} color="gray8" center>
        No results found {value && `for "${value}"`}
      </BreakWord>
    </Flex>
  );
}

NoResults.propTypes = propTypes;
NoResults.defaultProps = defaultProps;

export default NoResults;
