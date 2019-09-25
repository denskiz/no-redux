import React from 'react';
import { IEpisodeProps } from './interfaces';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    fetchDataAction(dispatch);
  }, []);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
}
