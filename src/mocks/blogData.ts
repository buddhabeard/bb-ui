import { BlogCardProps } from '../components';

export type BlogData = {
  cards: BlogCardProps[];
};

const blogData: BlogData = {
  cards: [
    {
      cardTitle: 'Entry 1',
      cardImage: '',
      cardCategory: 'General',
      cardLink: 'https://google.com',
      cardSummary: 'The card summary goes in here',
    },
    {
      cardTitle: 'Entry 2',
      cardImage: '',
      cardCategory: 'How-To',
      cardLink: 'https://google.com',
      cardSummary: 'The card summary goes in here',
    },
    {
      cardTitle: 'Entry 3',
      cardImage: '',
      cardCategory: 'User Stories',
      cardLink: 'https://google.com',
      cardSummary: 'The card summary goes in here',
    },
  ],
};

export default blogData;
