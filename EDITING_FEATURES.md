# Editing Features Documentation

## Overview
The portfolio now includes a **global edit/view mode toggle** that controls editing for the entire portfolio. When in edit mode, all sections become editable. When in view mode, all sections are read-only.

## Global Edit Mode

### Toggle Location
- **Edit Mode Button**: Fixed position at top-left corner (next to theme toggle)
- **View Mode**: Shows "Edit Mode" button
- **Edit Mode**: Shows "Save All", "Cancel", and "View Mode" buttons

### How It Works

1. **Click "Edit Mode"** button (top-left)
   - All sections become editable
   - Backup of current data is created
   - Input fields appear throughout the portfolio

2. **Make Changes**
   - Edit any field in any section
   - Changes update state in real-time
   - All sections are editable simultaneously

3. **Save or Cancel**
   - **Save All**: Keeps all changes and exits edit mode
   - **Cancel**: Reverts all changes to backup and exits edit mode
   - **View Mode**: Exits edit mode (changes remain in state but not saved)

## Editable Sections

### 1. Profile Sidebar
- **Timezone**: Edit the timezone display
- **Languages**: Add, remove, or modify language tags
- All fields become editable when edit mode is active

### 2. Intro Section
- **Name**: Edit the main name/title
- **Subtitle**: Edit the professional title
- **About**: Edit the about text (multiline textarea)
- All fields become editable when edit mode is active

### 3. Interview Cards
- **Title**: Edit interview title
- **Duration**: Edit interview duration
- **Technical Score**: Edit technical rating (0-100)
- **Communication Score**: Edit communication rating (0-100)
- **Summary**: Edit interview summary (multiline textarea)
- **Note**: Clicking cards to view details is disabled in edit mode

### 4. Portfolio Content
- **Experiences**: 
  - Edit company name, role, duration
  - Add/remove achievement items
  - Add new experiences
  - Remove experiences
- All fields become editable when edit mode is active

## State Management

### Data Flow
- All editable data is stored in React state in `PortfolioContainer`
- When entering edit mode, backup states are created
- Changes update state immediately as you type
- Save keeps changes, Cancel reverts to backup

### Backup System
- Backup is created when entering edit mode
- Cancel restores from backup
- Save commits changes (backup becomes current state)

## Usage Example

```tsx
// Global edit mode state
const [isEditMode, setIsEditMode] = useState(false);

// Enter edit mode - backup all data
const handleToggleEditMode = () => {
  if (!isEditMode) {
    setBackupProfileData(profileData);
    setBackupIntroData(introData);
    setBackupInterviewsData([...interviewsData]);
    setBackupExperiencesData([...experiencesData]);
  }
  setIsEditMode(!isEditMode);
};

// Save all changes
const handleSaveAll = () => {
  setIsEditMode(false);
  // Changes are already in state
};

// Cancel all changes
const handleCancelAll = () => {
  setProfileData(backupProfileData);
  setIntroData(backupIntroData);
  setInterviewsData(backupInterviewsData);
  setExperiencesData(backupExperiencesData);
  setIsEditMode(false);
};
```

## Components

### GlobalEditToggle
- Fixed position button at top-left
- Shows "Edit Mode" in view mode
- Shows "Save All", "Cancel", "View Mode" in edit mode

### Editable Components
- `EditableField`: Text input/textarea that switches between display and edit mode
- `EditableNumber`: Number input with min/max validation
- `EditableList`: List of items that can be added/removed/edited

## Notes

- **Temporary Storage**: All edits are stored in React state only (not persisted to localStorage or backend)
- **Global Control**: One toggle controls editing for entire portfolio
- **Cancel Functionality**: All changes can be reverted with one click
- **Real-time Updates**: Changes update the state immediately as you type
- **Validation**: Number inputs have min/max validation (0-100 for scores)
- **View Mode Protection**: Interview card details panel is disabled in edit mode

## Future Enhancements

- Add persistence to localStorage
- Add backend API integration for saving
- Add undo/redo functionality
- Add validation for required fields
- Add rich text editing for descriptions
- Add image upload for profile picture
- Add confirmation dialog before canceling with unsaved changes
