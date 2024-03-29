// React router dom
import { useParams } from 'react-router-dom';
// NavBar component
import Header from '../components/Header';
// Episode Form component
import EpisodeForm from '../components/EpisodeForm/EpisodeForm';

const PodcastCreateEpisode = () => {

    const {id} = useParams();

    return (
        <div className='PodcastCreateEpisode'>
            <Header />
            <EpisodeForm  podcastId={id}/>
        </div>
    );
}

export default PodcastCreateEpisode;