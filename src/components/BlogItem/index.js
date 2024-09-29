// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-link">
        <div className="blog-item-cont">
          <img src={imageUrl} className="blog-item-img" alt={`item${id}`} />
          <div className="blog-info">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="autor-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-head">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
