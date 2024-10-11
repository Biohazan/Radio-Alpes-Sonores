'use client'

import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
    display: flex;
    flex: row;
    gap: 50px;
    justify-content: space-between;
    width: 100%;
`

export default function Home() {
    const [currentSong, setCurrentSong] = useState({
        title: 'Loading...',
        artist: 'Loading...',
        streamUrl: 'your-stream-url-here' // replace with your stream URL
    });

    useEffect(() => {
        const fetchCurrentSong = () => {
            const songData = {
                title: "Awesome Electronic Track",
                artist: "DJ Electric",
                streamUrl: "your-stream-url-here" // replace with your stream URL
            };
            setCurrentSong(songData);
        };
        fetchCurrentSong();
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Radio Alpes Sonores</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <h1>Welcome to Radio Alpes Sonores</h1>
            </header>
            <main className="main">
                <StyledSection >

                
                <section id="player" className="player">
                    <h2>Live</h2>
                    <audio controls className="audio-player">
                        <source src={currentSong.streamUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <p className="current-song">Current Song: <span className="song-title">{currentSong.title} by {currentSong.artist}</span></p>
                </section>
                <section id="programming" className="programming">
                    <h2>Programmation</h2>
                    <ul className="schedule">
                        <li>10:00 AM - DJ Set by Artist 1</li>
                        <li>12:00 PM - Live Mix by Artist 2</li>
                        <li>2:00 PM - Guest DJ Artist 3</li>
                        <li>4:00 PM - Electronic Classics</li>
                        <li>6:00 PM - New Releases Showcase</li>
                    </ul>
                </section>
                </StyledSection>

                <section>
                    <h2>Interviews de la semaine</h2>
                    <ul className="schedule">
                        <li>Set by Artist 1</li>
                        <li> Mix by Artist 2</li>
                        <li> Artist 3</li>
                        <li>Electronic Classics</li>
                        <li>New Releases Showcase</li>
                    </ul>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Radio Alpes Sonores</p>
            </footer>
        </div>
    );
}