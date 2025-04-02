import { useEffect } from 'react';
import { useRouter } from 'next/router';

const OA = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the PDF file
    window.location.href = '/oa.pdf';
  }, []);

  // Return null since we're redirecting
  return null;
};

export default OA;
