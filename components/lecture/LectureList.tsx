import React from 'react';
import LectureItem from './LectureItem';
import { useQuery } from 'react-query';

import { Lecture } from '@/interface/lecture';

const LectureList = () => {
  const { isLoading, data } = useQuery('lecture_list', () => {
    return fetch('/api/lectures')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
  })

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>
  }

  const lectureItems = data.lectureList.map((lecture: Lecture) => {
    return (
      <LectureItem key={lecture.id} lecture={lecture} />
    )
  })

  return (
    <div>
      { lectureItems }
    </div>
  );
};

export default LectureList;