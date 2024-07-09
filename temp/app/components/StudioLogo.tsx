import React from 'react';
import Image from 'next/image';

const MyLogo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://www.freepik.com/free-vector/abstract-metal-semicircle-logo_828258.htm#query=unique%20logo&position=0&from_view=keyword&track=ais_user&uuid=45e6a97e-3473-48ea-b17a-7f0094957a57"
        alt="Custom Logo"
        width={50}
        height={50}
      />
    </div>
  );
};

export default MyLogo;
