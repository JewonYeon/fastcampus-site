import type { NextApiRequest, NextApiResponse } from 'next'

const mockCategory = {
  id: 0,
  name: '프로그래밍',
}

const mockTags = [
  {
    id: 0,
    name: '평생소장',
  },
  {
    id: 1,
    name: 'AWS',
  },
  {
    id: 2,
    name: 'DevOps',
  },
]

const lecturesDataProgramming = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 3,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
  ]
}

const lecturesDataDataScience = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 3,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.query.categories === 'Programming') {
      res.status(200).json(lecturesDataProgramming);
    }

    if (req.query.categories === 'DataScience') {
      res.status(200).json(lecturesDataDataScience)
    }
}
