import { Cat, Dog, Bird, Origami } from 'lucide-react';
// import { Butterfly } from 'phosphor-react';

const AvatarDisplay = ({ avatarName, size = 24, strokeWidth = 1.5, className = "" }) => {
  // All avatar options available to the user
  const icons = {
    Cat: Cat,
    Dog: Dog,
    Bird: Bird,
    Origami: Origami
    // Butterfly: Butterfly
  };

  // Selects component from icons using avatarName or defaults to Cat
  const IconComponent = icons[avatarName] || Cat;

  return (
    <IconComponent
      className={`${className}`} // Applies any extra CSS passed in
      size={size} // Sets the width and height
      strokeWidth={strokeWidth} // Sets the thickness of the icon 
    />
  );
};

export default AvatarDisplay;