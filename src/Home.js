
//lesson 7 click events
/*const Home = () => {

const handleClick=()=>{
  console.log('hello,ninjas');
}

const handleClickAgain=(name)=>{
  console.log('hello ' + name);
}

    return ( 
        <div className="home">
          <h2>Homepage</h2> 
          <button onClick={handleClick}>Click me</button> 
          <button onClick={()=>{
            handleClickAgain('mario')
          }}>Click me again</button>
        </div>
     );
}
 
export default Home;*/

//lesson 8 using state
/*import {useState} from 'react';

const Home = () => {
//let name='maari'
const [name,setName]=useState('mario');
const [age,setAge]=useState(30);

const handleClick=()=>{
 setName('lucy')
 setAge(25)
}
  return (  
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 blogs
export default Home;
*/

//lesson 10&13 mix
//lesson 10 outputting list
/*import {useState} from 'react';
import Bloglist from './Bloglist';

const Home = () => {
const [blogs,setBlogs]=useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
])

//lesson-13 function into another component as props
const handleDelete=(id)=>{
  const newBlogs=blogs.filter(blog=>blog.id!==id);
  setBlogs(newBlogs);
}


  return ( 
    <div className="home">
     <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
     <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs"/>
    /* </div>
   );
}
 
export default Home;*/

//lesson 14-15 use effect hook
/*import {useState,useEffect} from 'react';
import Bloglist from './Bloglist';

const Home = () => {
const [blogs,setBlogs]=useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
])

const [name,setName]=useState('mario');

const handleDelete=(id)=>{
  const newBlogs=blogs.filter(blog=>blog.id!==id);
  setBlogs(newBlogs);
}

useEffect(()=>{
  console.log('use effect run')
  console.log(name)
},[name])//[]empty dependencies array it runs the function only once ,after doing chnages like delete the function will not run again

  return ( 
    <div className="home">
     <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
     <button onClick={()=>setName('lucy')}>Change name</button>
    </div>
   );
}
export default Home;
*/

//lesson 17&18 fetching data with use effect
/*import {useState,useEffect} from 'react';
import Bloglist from './Bloglist';

const Home = () => {
const [blogs,setBlogs]=useState(null);
const [isPending,setIsPending]=useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
  setTimeout(()=>{
  fetch('http://localhost:8000/blogss')
  .then(res=>{
    if (!res.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    } 
    return res.json();
  })
  .then(data=>{
    setIsPending(false);
    setBlogs(data);
    setError(null);
 })
 .catch(err => {
  // auto catches network / connection error
  setIsPending(false);
  setError(err.message);
})
}, 1000);
}, [])

return (
  <div className="home">
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { blogs && <Bloglist blogs={blogs} /> }
  </div>
);
}
export default Home;
*/

//lesson 20 custom hook
import {useState,useEffect} from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
 const {data:blogs ,isPending, error}=useFetch('http://localhost:8000/blogs')

return (
  <div className="home">
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { blogs && <Bloglist blogs={blogs} title="All Blogs"/> }
  </div>
);
}

export default Home;