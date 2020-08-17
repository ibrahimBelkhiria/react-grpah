import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { MockedProvider } from '@apollo/client/testing';
import { SEARCH_QUERY } from '../graphql/queries';

const mocks = [
    {
      request: {
        query: SEARCH_QUERY,
        variables: {
          name: 'Buck',
        },
      },
      result: {
        data: {
            "search": {
                "__typename": "SearchResultItemConnection",
                "issueCount": 9379,
                "nodes": [
                  {
                    "id": "MDU6SXNzdWU2Nzk2NTU1MDA=",
                    "title": "Bug: Event Capture does not work in video environment",
                    "number": 19623,
                    "body": "This is related to https://github.com/facebook/react/issues/18932.\r\nIt seems that the problem still exists.\r\n\r\nReact version: 17.0.0-rc.0\r\n\r\n## Steps To Reproduce\r\n\r\n1. Copy https://gist.github.com/JenniferFuBook/c7c9ffd6dbd4e8b4e64afe9e6c66f66c#file-appwithvideo-js and replace App.js in Create React App.\r\n2. Name a video file IMG_2313.mp4, and put it under public directory.\r\n3. npm start\r\n\r\nAnother example:\r\n\r\n1. Copy https://gist.github.com/JenniferFuBook/04b81149af921efc316844e6783dff21#file-appwithyoutube-js and replace App.js in Create React App.\r\n2. npm i react-player\r\n3. npm start\r\n\r\n## The current behavior\r\nIf you click on the video control, such as play button, the click event is not captured,\r\n\r\n## The expected behavior\r\nIf you click on the video control, such as play button, the click event should be captured.",
                    "url": "https://github.com/facebook/react/issues/19623",
                    "state": "OPEN",
                    "author": {
                      "login": "JenniferFuBook",
                      "avatarUrl": "https://avatars2.githubusercontent.com/u/54613999?u=c78fc3a7bf50b49ccdd1835d8d3cee8678c43102&v=4",
                      "url": "https://github.com/JenniferFuBook"
                    },
                    "__typename": "Issue"
                  }]
                }
        },
      },
    },
  ];
  
  
test('check if home renders correctly', () => {


  const { getByText } = render( <MockedProvider  mocks={mocks} addTypename={false}> <Home/> </MockedProvider>);

//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
