import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetsupPage() {
  const history = useHistory();

  function onAddMeetupHandler(meetupData) {
    fetch(
      'https://react-meetups-539a3-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMeetsupPage;
