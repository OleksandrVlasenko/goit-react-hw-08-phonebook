import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Oval
      height={60}
      width={60}
      color="#05888d"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-30px, -30px)',
      }}
      wrapperClass=""
      visible={isLoading}
      ariaLabel="oval-loading"
      secondaryColor="#05888d"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
};
