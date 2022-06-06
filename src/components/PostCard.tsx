import { Link } from 'react-router-dom';
import { Post } from '../models/Post';

const PostCard = ({id, title, author, image, date, content}: Post) => {
  return (
    <div className='card'>
      <Link to={`/${id}`}>
        <div className='card-image' style={{backgroundImage: `url(${image})`}}></div>
        <div className='card-info'>
          <h3>{title}</h3>
          <div>
            <p>{author}</p>
            <p className='card-date'>{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;