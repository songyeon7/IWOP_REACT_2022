import {useEffect, useState} from "react";
import {add, list, remove} from "../module/api";
import {Link} from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      const data = await list();
      setData(data);
    })();
  }, []);

  const addContent = async (title, content) => {
    const data = await add(title, content);
    setData((prevState) => {
      return [...prevState, data];
    });
  }

  const removeContent = async (id) => {
    await remove(id);
    setData(await list());
  }

  return (
    <>
      <div>
        {data.map((e) => {
          return (
            <div key={e.id} style={{
              border: '1px solid black',
              borderRadius: '16px',
              margin: '16px',
              padding: '16px',
            }}>
              <Link to={`/${e.id}`}>
                <h2>{e.title}</h2>
              </Link>
              <p>{e.content}</p>
              <button onClick={()=>removeContent(e.id)}>remove</button>
            </div>
          )
        })}
      </div>
      <div>
        <input placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
        <input placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} /><br/>
        <button onClick={()=>addContent(title, content)}>추가하기</button>
      </div>
    </>
  );
}

export default Home;