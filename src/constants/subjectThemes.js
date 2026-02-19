import { Calculator, BookOpen, Lightbulb, Shapes } from 'lucide-react';

export const subjectThemes = {
  maths: {
    // Unique ID 
    id: 'maths',
    // Display Title
    label: 'Maths',
    // Primary Colour
    primary: '#0BA3AC',
    // Secondary Colour
    secondary: '#E0F2F3',
    // Shadow Colour
    shadow: '4px 4px 0px 0px #087d85',
    // Icon
    icon: Calculator,
  },
  english: {
    // Unique ID
    id: 'english',
    // Display Title
    label: 'English',
    // Primary Colour
    primary: '#CB4183',
    // Secondary Colour
    secondary: '#F8E7EF',
    // Shadow Colour
    shadow: '4px 4px 0px 0px #a13468',
    // Icon
    icon: BookOpen,
  },
  vr: {
    // Unique ID
    id: 'vr',
    // Display Title
    label: 'Verbal Reasoning',
    // Primary Colour
    primary: '#82BF00',
    // Secondary Colour
    secondary: '#EEF7DE',
    // Shadow Colour
    shadow: '4px 4px 0px 0px #669600',
    // Icon
    icon: Lightbulb,
  },
  nvr: {
    // Unique ID
    id: 'nvr',
    // Display Title
    label: 'Non-Verbal Reasoning',
    // Primary Colour
    primary: '#FE9335',
    // Secondary Colour
    secondary: '#FEECB7',
    // Shadow Colour
    shadow: '4px 4px 0px 0px #d47b2c',
    // Icon
    icon: Shapes,
  }
};

export const getSubjectTheme = (id) => subjectThemes[id] || subjectThemes.maths;