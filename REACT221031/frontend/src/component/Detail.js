import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get} from "../module/api";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await get(id);
      if (data) setData(data);
    })();
  }, []);

  return (
    <>
      {
        data ?
          <>
            <h2>{ data.title }</h2>
            <p>{ data.content }</p>
          </> :
          <>
            데이터가 존재하지 않습니다.
          </>
      }
    </>
  );
}

export default Detail;