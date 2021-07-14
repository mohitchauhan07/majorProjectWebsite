import React from 'react'
import './index.css';
import Card from '../components/AppliCards';

const Application = () => {
    return (
        <div className='applicationSection'>
        <h1 className="applicationHeading titleColor">{"Applications"}</h1>
        <div className='applicationContainer'  para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit ligula, rutrum hendrerit arcu vitae, fermentum placerat sapien. Phasellus dignissim leo eu tellus varius, et egestas diam faucibus. Nulla volutpat, odio sit amet faucibus varius, metus nunc aliquam mauris, non dictum ante diam rhoncus lectus. Ut tempor varius elit consequat scelerisque. Aenean congue mi nec lacus lacinia sodales. Curabitur at libero risus.'}>
        <Card src={'images/app1.png'} heading={'Image Based Lidar System'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit ligula, rutrum hendrerit arcu vitae, fermentum placerat sapien. Phasellus dignissim leo eu tellus varius, et egestas diam faucibus. Nulla volutpat, odio sit amet faucibus varius, metus nunc aliquam mauris, non dictum ante diam rhoncus lectus. Ut tempor varius elit consequat scelerisque. Aenean congue mi nec lacus lacinia sodales. Curabitur at libero risus.'}/>
        <Card src={'images/app2.jpg'} heading={'Autonomus Robots'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit ligula, rutrum hendrerit arcu vitae, fermentum placerat sapien. Phasellus dignissim leo eu tellus varius, et egestas diam faucibus. Nulla volutpat, odio sit amet faucibus varius, metus nunc aliquam mauris, non dictum ante diam rhoncus lectus. Ut tempor varius elit consequat scelerisque. Aenean congue mi nec lacus lacinia sodales. Curabitur at libero risus.'}/>
        <Card src={'images/app3.jpg'} heading={'Self-Driving Car'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit ligula, rutrum hendrerit arcu vitae, fermentum placerat sapien. Phasellus dignissim leo eu tellus varius, et egestas diam faucibus. Nulla volutpat, odio sit amet faucibus varius, metus nunc aliquam mauris, non dictum ante diam rhoncus lectus. Ut tempor varius elit consequat scelerisque. Aenean congue mi nec lacus lacinia sodales. Curabitur at libero risus.'}/>
        </div>
        </div>
    )
}

export default Application
