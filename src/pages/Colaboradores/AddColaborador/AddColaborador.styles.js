export const titleStyles = {
  fontWeight: 700,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 1,
};

export const textFieldStyles = {
  mb: 2.5,
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
  },
};

export const inputStyles = {
  borderRadius: 2,
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#667eea',
    },
  },
};

export const iconStyles = (hasError) => ({
  color: hasError ? 'error.main' : 'text.secondary',
  fontSize: 20,
});

export const salaryAdornment = (hasError) => ({
  fontWeight: 600,
  color: hasError ? 'error.main' : 'text.secondary',
});
