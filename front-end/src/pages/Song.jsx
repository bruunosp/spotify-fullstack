import Player from "../components/Player"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { songsArray } from "../assets/database/songs"
import { artistArray } from "../assets/database/artists"

const Song = () => {
  const { id } = useParams()

    const { image, name, duration, artist, audio, index } = songsArray.filter(
      (currentSongObj) => currentSongObj._id === id
    )[0]

    const artistObj = artistArray.filter(
      (currentArtistObj) => currentArtistObj.name === artist
    )[0]
  
    const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artist
    )

    const currentSongIndexInArtist = songsArrayFromArtist.findIndex(
      (song) => song._id === id
    )

    const hasPrevious = currentSongIndexInArtist > 0;
    const hasNext = currentSongIndexInArtist < songsArrayFromArtist.length - 1;

    const previousSongId = hasPrevious 
      ? songsArrayFromArtist[currentSongIndexInArtist - 1]._id 
      : songsArrayFromArtist[currentSongIndexInArtist]._id; // Mantém a mesma

    const nextSongId = hasNext 
      ? songsArrayFromArtist[currentSongIndexInArtist + 1]._id 
      : songsArrayFromArtist[currentSongIndexInArtist]._id; // Mantém a mesma

        
        const randomIdFromArtist = songsArrayFromArtist[0]._id;
        const randomId2FromArtist = songsArrayFromArtist[0]._id;

  return(
    <div className='song'>
      <div className='song__container'>
        <div className="song__image-container">
          <img 
            src={image} 
            alt={`Imagem da música ${name}`}
          />
        </div>
      </div>


      <div className='song__bar'>
        <Link 
          to={`/artist/${artistObj._id}`}
          className='song__artist-image'>
          <img 
            width={75} 
            height={75} 
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`} 
          />
        </Link>

        <Player 
          duration={duration}
          previousSongId={previousSongId} 
          nextSongId={nextSongId}
          audio={audio}
        s/>

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song