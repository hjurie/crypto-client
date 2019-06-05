import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import styled from  'styled-components';

const Home = ({match: {params: { market }}}) => 
  <Query query={HOME_PAGE} variables={{quote: market}}>
    {({loading, data, error}) => {
      if(loading) return <span>loading</span>;
      if(error) return <span>error</span>;
      return (
        <HomeStyle>
          <Market>
            {
              marketList.map(market => (
                <Link to={`/${market}`} key={market}>{market}</Link>
              ))
            }
          </Market>
          <CryptoList>
            {
              data.coins.map((item, idx) => (
                <li key={idx}><Link to={`/details/${item.base_currency}`} key={idx}>{item.base_currency}</Link></li>
              ))
            }
          </CryptoList>
        </HomeStyle>
      )
    }} 
  </Query>;

const marketList = ['krw', 'btc', 'eth', 'usdt', 'ht'];

const HomeStyle = styled.div`
  width: 100%;
`;

const Market = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  
  & a {
    display: block;
    padding: 10px;
    border: 1px solid #ececec;
  }
`;

const CryptoList = styled.ul`
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid #efefef;

  & li {
    border-top: 1px solid #efefef;
  }

  a {
    display: block;
    padding: 5px;
    color: #000;
    text-decoration: none;
    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`;


export default Home;