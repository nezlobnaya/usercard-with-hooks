import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import Followers from './Followers';
import styled from 'styled-components';
import '../index.css';

const UserList = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: space-between;
  justify-content: center;
 
`

export default function App() {

    const [userData, setUserData] = useState([])
    const [followers, setFollowers] = useState([])
    
        useEffect(() => {
          fetchUser()
        }, [])
        
      const fetchUser = () => {
        const urls = [
          'https://api.github.com/users/nezlobnaya',
          'https://api.github.com/users/nezlobnaya/followers'
        ]
        Promise.all(urls.map(url => fetch(url)
            .then(res => res.json())
            .catch(err => console.error('Request failed', err))
        ))
        .then(data => setUserData(data[0]) || setFollowers(data[1]))
        
      }
    
    
        return (
          <>    
            <UserList>
              <div className='App'>
              <h1>GitHub UserCards</h1>
              <UserCard key={userData.login} {...userData} />
              <Followers followers={followers} />
              </div>
            </UserList>
            
           </>
        )
      }
    














