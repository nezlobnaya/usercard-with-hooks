import React from 'react';



export default function App() {

    const [userData, setUserData] = useState()
    const [followers, setFollowers] = useState()
    
        useEffect(() => {
          fetchUser()
            return () => {
                console.log('cleaned up')
            };
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
        .then(data => this.setState({
          userData: data[0],
          followers: data[1]
        }))
        
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
    









    return (
        <div>
            <h1>GitHub UserCards</h1>
        </div>
    )
}





