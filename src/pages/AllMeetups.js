import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetups-539a3-default-rtdb.firebaseio.com/meetups.json'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const meetups = [];
        console.log(data);

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setIsLoading(false);

        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </div>
  );
}

export default AllMeetupsPage;
