import fs from 'fs';
import path from 'path';
import LegalPageLayout from '../LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Vertex Sentinel',
  description: 'The terms and conditions for using the Vertex Sentinel platform and guardrails.',
};

export default async function TermsOfService() {
  const filePath = path.join(process.cwd(), 'TERMS_OF_SERVICE.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <LegalPageLayout 
      title="Terms of Service" 
      content={fileContent} 
    />
  );
}
