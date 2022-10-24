import React from 'react';
import NavBar from '../components/NavBar';
import Announcement from '../components/Annoucement';
import Slider from '../components/Slider';

function Home() {
    return (
        <div>
<Announcement/>
            <NavBar/>
            <Slider/>
        </div>
    )
}

export default Home