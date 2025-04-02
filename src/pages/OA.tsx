import { useEffect } from 'react';

const OA = () => {
  useEffect(() => {
    // Redirect to the PDF file
    window.location.href = '/oa.pdf';
  }, []);

  // Return null since we're redirecting
  return null;
};

export default OA;
