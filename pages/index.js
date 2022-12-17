/* import React from 'react'
import Link from 'next/link'
import Footer from '../src/components/patterns/Footer';

function Title({ children, as }) {
  const Tag = as;
  return(
    <React.Fragment>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}
export default function HomePage() {
  return(
    <div>
      <Title as="h2">Zebedeu Cases</Title>
      <Link href="/faq">
        Página de Perguntas
      </Link>
      <Footer />
    </div>
  )
} */

import HomeScreen from "../src/screens/HomeScreen";

export default HomeScreen;