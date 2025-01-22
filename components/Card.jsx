const Card = (props) => {
  const { title, content, image, tags } = props.post;
  const onDelete = props.onDelete;

  return (
    <div className="col-12 col-md-4">
      <div className="card my-3">
        <img src={image} alt={title} />
        <div className="card-body">
          <h3 className="title-card mt-3 mb-3">{title}</h3>
          <div className="title-content">
            <strong>DESCRIZIONE: </strong>
            {content}
          </div>
          <div className="title-tags">
            <strong>TAGS: </strong>
            {tags.join(", ")}
          </div>
          <div className="btn btn-danger mt-3" onClick={onDelete}>
            <i className="fa-solid fa-trash-can"></i>Elimina
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
