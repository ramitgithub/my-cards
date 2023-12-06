import React, { useEffect, useState } from 'react'
import './Slidecard.css'
import axios from 'axios';

function Slidecard() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [list, setList] = useState(initialList);

    const fetchPost = async () => {
        try {
            const response = await axios(`https://jsonplaceholder.typicode.com/posts/`);
            setPosts(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchPost();
        }, 1000);
    }, [posts]) 

  function handleRemove(id) {
    const newPosts = posts.filter((item) => item.id !== id);

    return setPosts(newPosts);
    // return setPosts({ ...posts, posts: newPosts });
  }

    return (
        <div className='container'>
             {loading &&
        <h2 className='loading'>Loading...</h2>
      }
            {
                !loading && posts && posts.map((item) => (
                    <div key={item.id}>
                        <section className='slidecard'>
                            {/* <img src={`${item.userId}.jpg`} alt="user" /> */}
                            <div className="crossImage" onClick={(id) => handleRemove(item.id)}>
                            <img src="https://th.bing.com/th?id=OIP.F9_DNan44nfcXSL5q-_jxQHaHi&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                            </div>
                            <h1>{item.title}</h1>
                            <hr />
                            <p>{item.body}</p>
                            <br />
                            <div className="my-image">
                                <img src="https://www.freeiconspng.com/uploads/education-png-0.png" />
                            </div>
                            </section>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Slidecard
