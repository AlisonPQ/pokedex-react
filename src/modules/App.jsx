import { useEffect } from 'react';

const App = ({ getAppInfo }) => {
  useEffect(() => {
    getAppInfo();
  }, [getAppInfo]);

  return (
    <div>
      Innocent react app here
    </div>
  );
}

export default App;
