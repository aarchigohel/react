const Bloglist = ({blogs,title,handleDelete}) => {
//upar ni line ma andar parameters vagar hoi to niche ni be line krv pde
//const blogs=props.blogs;
//const title=props.title;


    return (  
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map(blog=>(
        <div className="blog-preview">
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
         {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>*/}
        </div>

        </div>
     ))} 
        </div>
    );
}
 
export default Bloglist;