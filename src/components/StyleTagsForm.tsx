import React from 'react';

type StyleTagsFormProps = {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
};

const StyleTagsForm: React.FC<StyleTagsFormProps> = ({
  selectedTags,
  onTagsChange,
}) => {
  // In a real app, this would come from an API
  const availableTags = ['summer', 'winter', 'garden', 'casual', 'formal', 'business', 'street', 'vintage'];

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // Remove tag if already selected
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < 5) {
      // Add tag if under the limit
      onTagsChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="step-content">
      <h2>Style Preferences</h2>
      <div className="style-tags">
        {availableTags.map((tag) => (
          <div 
            key={tag}
            className={`style-tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="helper-text">Select up to 5 style tags.</p>
    </div>
  );
};

export default StyleTagsForm; 