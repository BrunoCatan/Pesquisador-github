import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import "./Cards.css";

const Cards = ({ data }: any) => {
  const [listRepository, setListRepository] = useState(data);

  useEffect(() => {
    setListRepository(data);
  }, [data]);

  return (
    <div>
      {listRepository &&
        listRepository.map(
          (repository: {
            topics: string | any[];
            id: Key | null | undefined;
            html_url: string | undefined;
            full_name:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            description:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            stargazers_count:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            language:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            forks_count:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            open_issues_count:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => {
            let topics = [];
            for (let i = 0; i < repository.topics.length; i++) {
              topics.push(
                <div className="topic" key={i}>
                  <p>{repository.topics[i]}</p>
                </div>
              );
            }
            return (
              <a key={repository.id} href={repository.html_url} target="_blank">
                <div className="cards">
                  <p>{repository.full_name}</p>
                  <p>{repository.description}</p>
                  <div className="topics">{topics}</div>
                  <div className="subCards">
                    <p>Stars: {repository.stargazers_count}</p>
                    <p>Lang: {repository.language}</p>
                    <p>Forks: {repository.forks_count}</p>
                    <p>Issues: {repository.open_issues_count}</p>
                  </div>
                </div>
              </a>
            );
          }
        )}
    </div>
  );
};

export default Cards;
