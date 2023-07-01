import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

import { selectIsLoadingContacts } from 'redux/contacts/selectors';

export const Loader = () => {
  const isLoadingContacts = useSelector(selectIsLoadingContacts);

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
      // visible={isLoadingContacts}
      ariaLabel="oval-loading"
      secondaryColor="#05888d"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
};
