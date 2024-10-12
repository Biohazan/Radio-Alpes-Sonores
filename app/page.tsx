'use client';

import Head from 'next/head';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import logo from '../public/vector.svg';

export default function Home() {
  const [currentSong, setCurrentSong] = useState({
    title: 'Loading...',
    artist: 'Loading...',
    streamUrl: 'your-stream-url-here', // replace with your stream URL
  });

  useEffect(() => {
    const fetchCurrentSong = () => {
      const songData = {
        title: 'Awesome Electronic Track',
        artist: 'DJ Electric',
        streamUrl: 'your-stream-url-here', // replace with your stream URL
      };
      setCurrentSong(songData);
    };
    fetchCurrentSong();
  }, []);

  return (
    <div className="container flex flex-col w-full ">
      <div className="background fixed h-screen w-screen -z-10" />
      <header className="header flex flex-row w-screen h-20 bg-white">
        <ul className="hidden  md:flex  flex-row align-text-bottom  w-full gap-5 ml-5  lg:ml-36">
          <li className="flex flex-col justify-end ">
            <a href="" className="p-3 hover:bg-green-500 hover:text-white">
              Programmation
            </a>
          </li>
          <li className="flex flex-col justify-end">
            <a href="" className="p-3 hover:bg-green-500 hover:text-white">
              Actualité
            </a>
          </li>
          <li className="flex flex-col justify-end">
            <a href="" className="p-3 hover:bg-green-500 hover:text-white">
              Live à venir
            </a>
          </li>
          <li className="flex flex-col justify-end">
            <a href="" className="p-3 hover:bg-green-500 hover:text-white">
              Artistes
            </a>
          </li>
        </ul>

        <div className="header absolute flex flex-row align-middle bg-transparent right-20">
          <h1 className="hidden sm:block absolute bottom-4 -left-72 text-xl">
            Bienvenue sur Alpine Vibes
          </h1>
          <Image src={logo} width={200} height={300} alt="logo" className="" />
        </div>
      </header>

      <main className="main flex justify-end w-full mt-20">
        <div className="flex flex-col gap-10 m-7">
          <section id="programming" className="programming bg-white p-6">
            <h2>Programmation</h2>
            <ul className="schedule">
              <li>10:00 AM - DJ Set by Artist 1</li>
              <li>12:00 PM - Live Mix by Artist 2</li>
              <li>2:00 PM - Guest DJ Artist 3</li>
              <li>4:00 PM - Electronic Classics</li>
              <li>6:00 PM - New Releases Showcase</li>
            </ul>
          </section>
          <section className="interview bg-white p-6">
            <h2>Interviews de la semaine</h2>
            <ul className="schedule">
              <li>Set by Artist 1</li>
              <li> Mix by Artist 2</li>
              <li> Artist 3</li>
              <li>Electronic Classics</li>
              <li>New Releases Showcase</li>
            </ul>
          </section>
          <section className="interview bg-white p-6">
            <h2>Interviews de la semaine</h2>
            <ul className="schedule">
              <li>Set by Artist 1</li>
              <li> Mix by Artist 2</li>
              <li> Artist 3</li>
              <li>Electronic Classics</li>
              <li>New Releases Showcase</li>
            </ul>
          </section>
          <section className="interview bg-white p-6">
            <h2>Interviews de la semaine</h2>
            <ul className="schedule">
              <li>Set by Artist 1</li>
              <li> Mix by Artist 2</li>
              <li> Artist 3</li>
              <li>Electronic Classics</li>
              <li>New Releases Showcase</li>
            </ul>
          </section>
          <section className="interview bg-white p-6">
            <h2>Interviews de la semaine</h2>
            <ul className="schedule">
              <li>Set by Artist 1</li>
              <li> Mix by Artist 2</li>
              <li> Artist 3</li>
              <li>Electronic Classics</li>
              <li>New Releases Showcase</li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Alpine Vibes</p>
      </footer>
      <section
        id="player"
        className="player fixed bottom-0 w-full flex justify-center bg-black text-white p-2">
        <div className="w-full max-w-lg">
          <p className="current-song p-2">
            Current Song:{' '}
            <span className="song-title">
              {currentSong.title} by {currentSong.artist}
            </span>
          </p>
          <audio controls className="audio-player w-full">
            <source src={currentSong.streamUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
}
