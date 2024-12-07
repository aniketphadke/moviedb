import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../services/api';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  // Fallback for missing poster_path
  const posterSrc = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'path/to/fallback/image.jpg';

  return (
    <Link to={`/movie/${movie.id}`} className="text-decoration-none">
      <Card className="h-100 shadow-sm border-0 transition-transform" style={{ cursor: 'pointer' }}>
        <Card.Img
          variant="top"
          src={posterSrc}
          alt={movie.title || 'Movie poster'}
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title className="text-dark text-truncate mb-2">{movie.title || 'Untitled Movie'}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Star className="text-warning me-1" size={20} />
              <span>{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
            </div>
            <span className="text-muted">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
            </span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

// PropTypes for validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieCard;