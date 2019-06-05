import React from 'react';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';

const Detail = ({match: {params: { crypto }}, history}) => 
  <Query query={DETAIL_PAGE} variables={{ crypto }}>
    {
      ({loading, error, data}) => {
        if(loading) return <span>loading</span>;
        if(error) return <span>error</span>;
        return (
          <div>
            <h1>{data.coinIntro.fullName}</h1>
            <div>
              <p>{data.coinIntro.summary}</p>
              <ul>
                <li>{data.coinIntro.publishTime}</li>
                <li>{data.coinIntro.publishVolume}</li>
                <li>{data.coinIntro.circulateVolume}</li>
                <li dangerouslySetInnerHTML={{ __html: data.coinIntro.officialWebsite }} />
              </ul>
            </div>
            <button type="button" onClick={history.goBack}>뒤로가기</button>
          </div>
        )
      }
    }
  </Query>

export default Detail;