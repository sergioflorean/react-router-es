// Review.tsx

import { useParams, useNavigate } from 'react-router-dom';
import type {ReviewData} from '../ReviewInterface.ts';
import './Review.css';

interface ReviewProps {
  reviews: ReviewData[];
}
function Review({ reviews }: ReviewProps): React.JSX.Element {
  const params = useParams<{ reviewId: string }>();
  const navigate = useNavigate();
  // Convertimos el parámetro de string a número de forma segura.
  // Si params.reviewId existe, lo parseamos y le restamos 1.
  // Si por alguna razón es undefined, le asignamos 0 como seguridad.
  const id = params.reviewId ? parseInt(params.reviewId, 10) - 1 : 0;

  return (
    <div className='review'>
      {/* Nos aseguramos de que haya reseñas antes de intentar renderizarlas */}
      {reviews && reviews.length > 0 && (
        <div className='review__item'>
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className='review__rating'>Calificación final: {reviews[id]?.rating}/5</p>
          <button type='button' onClick={() => navigate('/reviews')} className='review__back-button'>
            Volver a la lista de reseñas
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;