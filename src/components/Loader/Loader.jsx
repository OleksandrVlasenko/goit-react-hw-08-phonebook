import { Oval } from 'react-loader-spinner';

export const Loader = () => {
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
      ariaLabel="oval-loading"
      secondaryColor="#05888d"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
};
