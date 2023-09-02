import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

export const saveVote = async (voteValue, street) => {
  // Firebase code to save the vote
};

export const getMostPopularObservation = async (street) => {
  // Firebase code to get the most popular observation
};
