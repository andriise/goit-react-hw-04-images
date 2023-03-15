import LoaderStyled from './Loader.styled';
import { Dna } from 'react-loader-spinner';
const Loader = () => (
  <LoaderStyled>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </LoaderStyled>
);
export default Loader;
