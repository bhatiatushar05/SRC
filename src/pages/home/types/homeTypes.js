// Home Page Data Types
// Simple data models for the home page

export const BannerType = {
  id: 'number',
  title: 'string',
  image: 'string',
  creation_date: 'string',
  is_active: 'boolean',
  user: 'number'
}

export const MasterListItemType = {
  image: 'string',
  title: 'string',
  description: 'string'
}

export const LetterType = {
  title: 'string',
  path: 'string',
  length: 'number',
  actual: 'number'
}

export const CounterType = {
  internship: 'number',
  volunteer: 'number',
  pledge: 'number'
}

export const HomeDataType = {
  banner: 'array',
  upcoming_activity: 'array',
  twitter_data: 'array',
  master_data: 'object',
  master_list: 'array'
}

export const HomeStateType = {
  loading: 'boolean',
  error: 'string',
  currentSlide: 'number',
  homeData: 'object'
}
