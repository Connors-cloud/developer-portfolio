interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Instagram' | 'YouTube';
  url: `https://${string}` | null;
}

// Set each URL to your real profile address. Unset profiles are rendered as text.
export const socialLinks: readonly SocialLink[] = [
  { platform: 'GitHub', url: null },
  { platform: 'LinkedIn', url: null },
  { platform: 'Instagram', url: null },
  { platform: 'YouTube', url: null },
];
