import styled from 'styled-components';
import { Box } from 'grid-styled';
import { width } from 'styled-system';

import withSystem from '../utils/with-system';

const Container = styled(Box)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export default withSystem(Container, [width], {
  width: 0.85,
});
