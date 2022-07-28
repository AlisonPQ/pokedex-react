import { useEffect } from 'react';
import { connect } from 'react-redux';
import AppRouter from './AppRouter';


const mapStateToProps = ({
  pokemons
}) => ({
  pokemons
});

const mapActionsToProps = {};

const App = ({ getAppInfo  }) => {
  useEffect(() => {
    getAppInfo();
  }, [getAppInfo]);

  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(App);
