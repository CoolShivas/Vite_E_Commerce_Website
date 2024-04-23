const ImgPicture = ({picture}) => {
  // console.log(picture); // Here, we are getting the images;
  return <>
  {picture.map((drr, index)=>{
    return <figure>
      <img src={drr.url} alt={drr.filename} className="box_image__style"
      key={index} />
    </figure>
  })}
  </>
};

export default ImgPicture;
