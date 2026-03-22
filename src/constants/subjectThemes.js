import { Calculator, BookOpen, Lightbulb, Shapes } from 'lucide-react';

export const subjectThemes = {
  maths: {
    id: 'maths',
    label: 'Maths',
    primary: '#0BA3AC',
    secondary: '#E0F2F3',
    hover: '#14d6e0',
    shadow: '4px 4px 0px 0px #087d85',
    icon: Calculator
  },
  english: {
    id: 'english',
    label: 'English',
    primary: '#CB4183',
    secondary: '#F8E7EF',
    hover: '#ED519B',
    shadow: '4px 4px 0px 0px #a13468',
    icon: BookOpen
  },
  vr: {
    id: 'vr',
    label: 'Verbal Reasoning',
    primary: '#82BF00',
    secondary: '#EEF7DE',
    hover: '#9FE802',
    shadow: '4px 4px 0px 0px #669600',
    icon: Lightbulb
  },
  nvr: {
    id: 'nvr',
    label: 'Non-Verbal Reasoning',
    primary: '#FE9335',
    secondary: '#FEECB7',
    hover: '#FCA558',
    shadow: '4px 4px 0px 0px #d47b2c',
    icon: Shapes
  }
};

export const getSubjectTheme = (id) => subjectThemes[id] || subjectThemes.maths;