import React from 'react';
import UserCard from './UserCard';

const Followers = (props) => {
    console.log('Followers Props', props)
    return(<>
        {props.followers.map((i, index) => 
        <UserCard key={index} {...i} />)}
         </>
        )
}

export default Followers;