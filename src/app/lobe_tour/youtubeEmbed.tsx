'use client'
import React, { useEffect, useRef, useState } from 'react'
import YouTube, { YouTubeEvent } from 'react-youtube';
export default function YoutubeEmbed({visible, hide}: {visible: boolean, hide: () => void}) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [player, setPlayer] = useState<any>(null);

    useEffect(() => {
        if(visible && player) {
            console.log(123)
            player.playVideo()
        }else if(player) {
            console.log(345)
            player.pauseVideo()

        }
    }, [visible, player])

    const onReady = (event: YouTubeEvent) => {
        // Access the player instance
        const player = event.target;
        setPlayer(player)
        // For example, you can automatically play the video
        player.pauseVideo();
    };


    const onError = (error: YouTubeEvent) => {
        console.error('YouTube Player Error:', error);
    };

    return (
        <div className={`fixed z-10 w-screen h-screen top-0 left-0 ${visible ? 'flex' : 'hidden'} justify-center items-center`}>
            <div className='absolute inset-0 backdrop-blur-md' style={{backgroundColor: "rgba(0,0,0,0.8)"}} onClick={hide}></div>
            <div className='relative z-10 w-full max-w-4xl'>
                <YouTube
                    videoId={'czZ1PvNW5hk'}
                    onReady={onReady}
                    onError={onError}
                    className='youtube-container'
                />
            </div>
        </div>
    );
}
