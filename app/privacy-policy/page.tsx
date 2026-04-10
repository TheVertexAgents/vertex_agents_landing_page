import fs from 'fs';
import path from 'path';
import LegalPageLayout from '../LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vertex Sentinel',
  description: 'How Vertex Sentinel handles data and ensures privacy for autonomous agent operations.',
};

export default async function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'PRIVACY_POLICY.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      content={fileContent} 
    />
  );
}
